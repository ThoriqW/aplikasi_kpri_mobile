import 'package:aplikasi_kpri_mobile/views/help_view.dart';
import 'package:aplikasi_kpri_mobile/views/privacy_policy_view.dart';
import 'package:aplikasi_kpri_mobile/views/profile_view.dart';
import 'package:aplikasi_kpri_mobile/views/terms_and_conditions_view.dart';
import 'package:aplikasi_kpri_mobile/widgets/account_menu.dart';
import 'package:flutter/material.dart';

class AccountView extends StatelessWidget {
  const AccountView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Akun",
          style: TextStyle(color: Theme.of(context).colorScheme.onPrimary),
        ),
        backgroundColor: Theme.of(context).colorScheme.primary,
      ),
      body: SingleChildScrollView(
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
                  const Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "Moh Thoriq Wajedi",
                        style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 16,
                            color: Colors.white),
                      ),
                      Text(
                        "7204080401990001",
                        style: TextStyle(fontSize: 12, color: Colors.white),
                      ),
                      SizedBox(
                        height: 4,
                      ),
                      Text(
                        "Bina Marga Kab. Tolitoli",
                        style: TextStyle(fontSize: 12, color: Colors.white),
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
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      border: Border(
                        bottom: BorderSide(
                            width: 2,
                            color:
                                Theme.of(context).colorScheme.onInverseSurface),
                      ),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Row(
                          children: [
                            Icon(
                              Icons.settings,
                              color: Theme.of(context).colorScheme.primary,
                            ),
                            const SizedBox(width: 8),
                            const Text("Pengaturan"),
                          ],
                        ),
                        Icon(
                          Icons.arrow_right,
                          color: Theme.of(context).colorScheme.onSurfaceVariant,
                        )
                      ],
                    ),
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
                          builder: (context) => const TermsAndConditionsView(),
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
      ),
    );
  }
}
