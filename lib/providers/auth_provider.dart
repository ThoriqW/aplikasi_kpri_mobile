import 'dart:convert';

import 'package:aplikasi_kpri_mobile/models/auth.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:aplikasi_kpri_mobile/api/api_connection.dart';
import 'package:http/http.dart' as http;

class AuthNotifier extends StateNotifier<Authentication?> {
  AuthNotifier() : super(null);

  final String baseUrl = API.baseUrl;

  Future<void> login(String nip, String password) async {
    final response = await http.post(
      Uri.parse('$baseUrl/users/login'),
      headers: {'Content-Type': 'application/json; charset=UTF-8'},
      body: jsonEncode({'nip': nip, 'password': password}),
    );
    if (response.statusCode == 200) {
      final authResponse = Authentication.fromJson(jsonDecode(response.body));
      await saveToken(authResponse);
      state = authResponse;
    } else {
      throw Exception('Nip Atau Password Salah');
    }
  }

  Future<void> saveToken(Authentication authResponse) async {
    final prefs = await SharedPreferences.getInstance();
    prefs.setString('accessToken', authResponse.accessToken);
  }

  Future<void> loadToken() async {
    final prefs = await SharedPreferences.getInstance();
    final accessToken = prefs.getString('accessToken');
    if (accessToken != null) {
      state = Authentication(accessToken: accessToken);
    }
  }

  Future<void> logout() async {
    final prefs = await SharedPreferences.getInstance();
    prefs.remove('accessToken');
    prefs.remove('refreshToken');
    state = null;
  }
}

final authStateProvider = StateNotifierProvider<AuthNotifier, Authentication?>(
  (ref) {
    return AuthNotifier();
  },
);

final authProvider = FutureProvider<void>(
  (ref) async {
    final authNotifier = ref.watch(authStateProvider.notifier);
    await authNotifier.loadToken();
  },
);
