import 'package:aplikasi_kpri_mobile/utils/global_colors.dart';
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
        backgroundColor: GlobalColors.primaryColor,
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Stack(
              alignment: Alignment.bottomCenter,
              clipBehavior: Clip.none,
              children: [
                Container(
                  color: GlobalColors.primaryColor,
                  width: double.infinity,
                  padding: const EdgeInsets.fromLTRB(16.0, 16.0, 16.0, 50.0),
                  child: const Row(
                    children: [
                      CircleAvatar(
                        radius: 40,
                        child: CircleAvatar(
                          backgroundImage:
                              AssetImage("assets/images/thoriq.png"),
                          radius: 37,
                        ),
                      ),
                      SizedBox(width: 16),
                      Column(
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
                                    .secondaryContainer,
                                borderRadius: BorderRadius.circular(8),
                              ),
                              padding: const EdgeInsets.all(4.0),
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
                          padding: const EdgeInsets.all(6.0),
                          decoration: BoxDecoration(
                            color: Theme.of(context)
                                .colorScheme
                                .secondaryContainer,
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
              child: const Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      HomeMenu(title: "Simpanan", image: "wallet.png"),
                      HomeMenu(title: "Pinjaman", image: "note.png"),
                      HomeMenu(title: "THR", image: "gift.png"),
                    ],
                  ),
                  SizedBox(
                    height: 16,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      HomeMenu(title: "Informasi", image: "announcement.png"),
                      HomeMenu(title: "Bantuan", image: "help.png"),
                      HomeMenu(title: "Tentang", image: "about.png"),
                    ],
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
