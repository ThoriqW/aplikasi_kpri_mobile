import 'dart:convert';

import 'package:aplikasi_kpri_mobile/models/auth.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:aplikasi_kpri_mobile/api/api_connection.dart';
import 'package:http/http.dart' as http;

part 'auth_provider.g.dart';

@riverpod
class AuthNotifier extends _$AuthNotifier {
  @override
  FutureOr<Authentication?> build() => null;

  final String baseUrl = API.baseUrl;

  Future<void> login(String nip, String password) async {
    final response = await http.post(
      Uri.parse('$baseUrl/api/v1/users/login'),
      headers: {'Content-Type': 'application/json; charset=UTF-8'},
      body: jsonEncode({'nip': nip, 'password': password}),
    );
    if (response.statusCode == 200) {
      final authResponse = Authentication.fromJson(jsonDecode(response.body));
      await saveToken(authResponse);
      state = AsyncData(authResponse);
    } else {
      throw Exception('Gagal login');
    }
  }

  Future<void> saveToken(Authentication authResponse) async {
    final prefs = await SharedPreferences.getInstance();
    final authJson = jsonEncode({
      'id': authResponse.id,
      'token': authResponse.token,
    });
    await prefs.setString('token', authJson);
  }

  Future<void> loadToken() async {
    final prefs = await SharedPreferences.getInstance();
    final authJson = prefs.getString('token');
    if (authJson != null) {
      final Map<String, dynamic> authMap = jsonDecode(authJson);
      final auth = Authentication.fromJson(authMap);
      state = AsyncData(auth);
    }
  }

  Future<void> logout() async {
    final prefs = await SharedPreferences.getInstance();
    prefs.remove('token');
    state = const AsyncData(null);
  }
}
