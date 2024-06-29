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
      await saveAuthRespon(authResponse);
      state = authResponse;
    } else {
      throw Exception('Gagal login');
    }
  }

  Future<void> saveAuthRespon(Authentication authResponse) async {
    final prefs = await SharedPreferences.getInstance();
    final authJson = jsonEncode({
      'code': authResponse.code,
      'status': authResponse.status,
      'message': authResponse.message,
      'token': authResponse.token,
      'id': authResponse.id
    });
    await prefs.setString('auth_data', authJson);
  }

  Future<void> loadToken() async {
    final prefs = await SharedPreferences.getInstance();
    final authJson = prefs.getString('auth_data');
    if (authJson != null) {
      final Map<String, dynamic> authMap = jsonDecode(authJson);
      final auth = Authentication.fromJson(authMap);
      state = auth;
    }
  }

  Future<void> logout() async {
    final prefs = await SharedPreferences.getInstance();
    prefs.remove('token');
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
