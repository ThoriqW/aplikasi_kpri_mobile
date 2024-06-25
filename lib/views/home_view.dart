import 'package:aplikasi_kpri_mobile/views/about_view.dart';
import 'package:aplikasi_kpri_mobile/views/balance_view.dart';
import 'package:aplikasi_kpri_mobile/views/loan_view.dart';
import 'package:aplikasi_kpri_mobile/widgets/home_menu.dart';
import 'package:flutter/material.dart';

class HomeView extends StatelessWidget {
  const HomeView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "KPRI",
          style: TextStyle(fontWeight: FontWeight.bold, color: Colors.white),
        ),
        backgroundColor: Theme.of(context).colorScheme.primary,
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Stack(
              alignment: Alignment.bottomCenter,
              clipBehavior: Clip.none,
              children: [
                Container(
                  color: Theme.of(context).colorScheme.primary,
                  width: double.infinity,
                  padding: const EdgeInsets.fromLTRB(16.0, 10.0, 16.0, 70.0),
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
                Positioned(
                  bottom: -70,
                  child: Container(
                    width: MediaQuery.of(context).size.width - 32,
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(12),
                      boxShadow: const [
                        BoxShadow(
                          color: Color.fromRGBO(0, 0, 0, 0.1),
                          blurRadius: 12,
                          spreadRadius: 0,
                          offset: Offset(0, 4),
                        ),
                      ],
                    ),
                    padding: const EdgeInsets.all(12.0),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Column(
                          mainAxisSize: MainAxisSize.min,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Text(
                              "Saldo Anggota",
                              style: TextStyle(fontSize: 12),
                            ),
                            const SizedBox(height: 4),
                            const Text(
                              "Rp. 2,700,500",
                              style: TextStyle(
                                  fontSize: 24, fontWeight: FontWeight.bold),
                            ),
                            const SizedBox(height: 8),
                            Container(
                              decoration: BoxDecoration(
                                color: Theme.of(context)
                                    .colorScheme
                                    .primaryContainer,
                                borderRadius: BorderRadius.circular(8),
                              ),
                              padding: const EdgeInsets.symmetric(
                                vertical: 5.0,
                                horizontal: 12.0,
                              ),
                              child: const Text(
                                "Okt 2009 - Mei 2024",
                                style: TextStyle(
                                  fontSize: 12,
                                  fontStyle: FontStyle.italic,
                                ),
                              ),
                            )
                          ],
                        ),
                        Container(
                          padding: const EdgeInsets.symmetric(
                            vertical: 5.0,
                            horizontal: 12.0,
                          ),
                          decoration: BoxDecoration(
                            color:
                                Theme.of(context).colorScheme.primaryContainer,
                            borderRadius: BorderRadius.circular(8),
                          ),
                          child: const Text(
                            "AKTIF",
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        )
                      ],
                    ),
                  ),
                )
              ],
            ),
            Container(
              width: MediaQuery.of(context).size.width - 64,
              margin: const EdgeInsets.only(top: 100),
              child: GridView.count(
                crossAxisCount: 4,
                mainAxisSpacing: 12,
                crossAxisSpacing: 8,
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                children: <Widget>[
                  HomeMenu(
                    title: "Simpanan",
                    image: "wallet.svg",
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => const BalanceView(),
                        ),
                      );
                    },
                  ),
                  HomeMenu(
                    title: "Pinjaman",
                    image: "note.svg",
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => const LoanView(),
                        ),
                      );
                    },
                  ),
                  HomeMenu(
                    title: "THR",
                    image: "gift.svg",
                    onTap: () {},
                  ),
                  HomeMenu(
                    title: "Bantuan",
                    image: "help.svg",
                    onTap: () {},
                  ),
                  HomeMenu(
                    title: "Tentang",
                    image: "about.svg",
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => const AboutView(),
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
