import 'dart:convert';

import 'package:aplikasi_kpri_mobile/api/api_connection.dart';
import 'package:aplikasi_kpri_mobile/models/auth_response.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

class AuthService {
  final String baseUrl = API.baseUrl;

  Future<AuthResponse> login(String nip, String password) async {
    final response = await http.post(
      Uri.parse('$baseUrl/users/login'),
      headers: {'Content-Type': 'application/json; charset=UTF-8'},
      body: jsonEncode({'nip': nip, 'password': password}),
    );

    if (response.statusCode == 200) {
      return AuthResponse.fromJson(jsonDecode(response.body));
    } else {
      throw Exception('Nip Atau Password Salah');
    }
  }

  Future<void> saveToken(AuthResponse authResponse) async {
    final prefs = await SharedPreferences.getInstance();
    prefs.setString('accessToken', authResponse.accessToken);
  }

  Future<AuthResponse?> loadToken() async {
    final prefs = await SharedPreferences.getInstance();
    final accessToken = prefs.getString('accessToken');

    if (accessToken != null) {
      return AuthResponse(accessToken: accessToken);
    }

    return null;
  }

  Future<void> logout() async {
    final prefs = await SharedPreferences.getInstance();
    prefs.remove('accessToken');
    prefs.remove('refreshToken');
  }
}
