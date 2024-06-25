import 'package:aplikasi_kpri_mobile/models/auth_response.dart';
import 'package:aplikasi_kpri_mobile/services/auth_service.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class AuthNotifier extends StateNotifier<AuthResponse?> {
  AuthNotifier(this.authService) : super(null);

  final AuthService authService;

  Future<void> login(String nip, String password) async {
    try {
      final authResponse = await authService.login(nip, password);
      await authService.saveToken(authResponse);
      state = authResponse;
    } catch (e) {
      throw Exception(e.toString().substring(11));
    }
  }

  Future<void> loadToken() async {
    final token = await authService.loadToken();
    if (token != null) {
      state = token;
    }
  }

  Future<void> logout() async {
    await authService.logout();
    state = null;
  }
}

final authServiceProvider = Provider<AuthService>(
  (ref) {
    return AuthService();
  },
);

final authStateProvider = StateNotifierProvider<AuthNotifier, AuthResponse?>(
  (ref) {
    final authService = ref.watch(authServiceProvider);
    return AuthNotifier(authService);
  },
);

final authProvider = FutureProvider<void>(
  (ref) async {
    final authNotifier = ref.watch(authStateProvider.notifier);
    await authNotifier.loadToken();
  },
);
