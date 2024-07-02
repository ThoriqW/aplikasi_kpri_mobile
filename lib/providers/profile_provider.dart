import 'dart:convert';

import 'package:aplikasi_kpri_mobile/models/auth.dart';
import 'package:aplikasi_kpri_mobile/models/profile.dart';
import 'package:aplikasi_kpri_mobile/api/api_connection.dart';
import 'package:http/http.dart' as http;
import 'package:riverpod_annotation/riverpod_annotation.dart';
import 'package:shared_preferences/shared_preferences.dart';

part 'profile_provider.g.dart';

@riverpod
class ProfileNotifier extends _$ProfileNotifier {
  @override
  FutureOr<Profile> build() async {
    const String baseUrl = API.baseUrl;
    final prefs = await SharedPreferences.getInstance();
    final authToken = prefs.getString('token');

    if (authToken == null) {
      throw Exception('No authentication token found');
    }

    try {
      final Map<String, dynamic> mapToken = jsonDecode(authToken);
      final auth = Authentication.fromJson(mapToken);
      final response = await http.get(
        Uri.parse("$baseUrl/api/v1/profiles/${auth.id}"),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer ${auth.token}',
        },
      );
      if (response.statusCode == 200) {
        final Map<String, dynamic> profileJson = jsonDecode(response.body);
        return Profile.fromJson(profileJson);
      } else {
        throw Exception('Failed to load profile : ${response.body}');
      }
    } catch (e) {
      throw Exception('Failed to load profile: $e');
    }
  }
}
