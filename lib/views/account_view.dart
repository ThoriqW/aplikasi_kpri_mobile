import 'package:aplikasi_kpri_mobile/providers/profile_provider.dart';
import 'package:aplikasi_kpri_mobile/views/help_view.dart';
import 'package:aplikasi_kpri_mobile/views/privacy_policy_view.dart';
import 'package:aplikasi_kpri_mobile/views/profile_view.dart';
import 'package:aplikasi_kpri_mobile/views/settings_view.dart';
import 'package:aplikasi_kpri_mobile/views/terms_and_conditions_view.dart';
import 'package:aplikasi_kpri_mobile/widgets/account_menu.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class AccountView extends ConsumerWidget {
  const AccountView({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profileState = ref.watch(profileNotifierProvider);
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Akun",
          style: TextStyle(color: Theme.of(context).colorScheme.onPrimary),
        ),
        backgroundColor: Theme.of(context).colorScheme.primary,
      ),
      body: profileState.when(
        data: (profile) {
          return SingleChildScrollView(
            child: Column(
              children: [
                Container(
                  color: Theme.of(context).colorScheme.primary,
                  width: double.infinity,
                  padding: const EdgeInsets.fromLTRB(16.0, 16.0, 16.0, 35.0),
                  child: Row(
                    children: [
                      CircleAvatar(
                        radius: 40,
                        backgroundColor:
                            Theme.of(context).colorScheme.primaryContainer,
                        child: CircleAvatar(
                          backgroundColor:
                              Theme.of(context).colorScheme.surfaceVariant,
                          radius: 37,
                          child: Icon(
                            Icons.person,
                            size: 40,
                            color: Theme.of(context).colorScheme.primary,
                          ),
                        ),
                      ),
                      const SizedBox(width: 16),
                      Column(
                        mainAxisSize: MainAxisSize.min,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            profile.fullName,
                            style: const TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 16,
                                color: Colors.white),
                          ),
                          Text(
                            profile.nip,
                            style: const TextStyle(
                                fontSize: 12, color: Colors.white),
                          ),
                          const SizedBox(
                            height: 4,
                          ),
                          Text(
                            profile.address ?? "",
                            style: const TextStyle(
                                fontSize: 12, color: Colors.white),
                          ),
                        ],
                      )
                    ],
                  ),
                ),
                Container(
                  width: MediaQuery.of(context).size.width - 32,
                  margin: const EdgeInsets.only(top: 35),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(12),
                    color: Colors.white,
                    boxShadow: const [
                      BoxShadow(
                        color: Color.fromRGBO(0, 0, 0, 0.1),
                        blurRadius: 9,
                        spreadRadius: 0,
                        offset: Offset(0, 2),
                      ),
                    ],
                  ),
                  child: Column(
                    children: [
                      AccountMenu(
                        icon: Icons.person,
                        text: "Profil Saya",
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => const ProfileView(),
                            ),
                          );
                        },
                      ),
                      AccountMenu(
                        icon: Icons.settings,
                        text: "Pengaturan",
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => const SettingsView(),
                            ),
                          );
                        },
                      ),
                    ],
                  ),
                ),
                Container(
                  width: MediaQuery.of(context).size.width - 32,
                  margin: const EdgeInsets.only(top: 35),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(12),
                    color: Colors.white,
                    boxShadow: const [
                      BoxShadow(
                        color: Color.fromRGBO(0, 0, 0, 0.1),
                        blurRadius: 9,
                        spreadRadius: 0,
                        offset: Offset(0, 2),
                      ),
                    ],
                  ),
                  child: Column(
                    children: [
                      AccountMenu(
                        icon: Icons.person,
                        text: "Pusat Bantuan",
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => const HelpView(),
                            ),
                          );
                        },
                      ),
                      AccountMenu(
                        icon: Icons.list,
                        text: "Syarat & Ketentuan",
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) =>
                                  const TermsAndConditionsView(),
                            ),
                          );
                        },
                      ),
                      AccountMenu(
                        icon: Icons.error,
                        text: "Kebijakan Privasi",
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => const PrivacyPolicyView(),
                            ),
                          );
                        },
                      ),
                    ],
                  ),
                ),
              ],
            ),
          );
        },
        error: (error, stackTrace) {
          return Center(
            child: Text("Failed to load account: $error"),
          );
        },
        loading: () {
          return const Center(
            child: CircularProgressIndicator(),
          );
        },
      ),
    );
  }
}
