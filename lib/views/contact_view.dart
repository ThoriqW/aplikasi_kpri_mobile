import 'package:aplikasi_kpri_mobile/widgets/contact_card.dart';
import 'package:flutter/material.dart';

class ContactView extends StatelessWidget {
  const ContactView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Kontak Kami",
          style: TextStyle(color: Theme.of(context).colorScheme.onPrimary),
        ),
        backgroundColor: Theme.of(context).colorScheme.primary,
        iconTheme: IconThemeData(
          color: Theme.of(context).colorScheme.onPrimary,
        ),
      ),
      body: SingleChildScrollView(
        child: Center(
          child: Container(
            width: MediaQuery.of(context).size.width - 32,
            margin: const EdgeInsets.only(top: 35),
            child: Column(
              children: [
                Text(
                  "Hubungi Kami",
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    color: Theme.of(context).colorScheme.primary,
                    fontSize: 18,
                  ),
                ),
                const SizedBox(height: 8),
                const Text(
                  "Kami siap membantu kapan pun dan dimana pun. Silakan hubungi kami kapan pun melalui",
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 12),
                const ContactCard(
                  icon: Icons.phone,
                  title: "Contact Admin",
                  subTitle: "082296709230",
                ),
                const ContactCard(
                  icon: Icons.email,
                  title: "Email",
                  subTitle: "thoriqwajedi88@gmail.com",
                ),
                const ContactCard(
                  icon: Icons.map,
                  title: "Alamat",
                  subTitle: "Jl. Hangtuah I",
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
