import 'package:aplikasi_kpri_mobile/providers/profile_provider.dart';
import 'package:aplikasi_kpri_mobile/views/about_view.dart';
import 'package:aplikasi_kpri_mobile/views/balance_view.dart';
import 'package:aplikasi_kpri_mobile/views/help_view.dart';
import 'package:aplikasi_kpri_mobile/views/loan_view.dart';
import 'package:aplikasi_kpri_mobile/widgets/home_menu.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class HomeView extends ConsumerWidget {
  const HomeView({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profileState = ref.watch(profileNotifierProvider);
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "KPRI",
          style: TextStyle(fontWeight: FontWeight.bold, color: Colors.white),
        ),
        backgroundColor: Theme.of(context).colorScheme.primary,
        actions: [
          IconButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const HelpView(),
                ),
              );
            },
            icon: Row(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const Icon(
                  Icons.headphones,
                ),
                const SizedBox(width: 4),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      "Pusat",
                      style: TextStyle(
                        color: Theme.of(context).colorScheme.onPrimary,
                        fontSize: 9,
                      ),
                    ),
                    Text(
                      "Bantuan",
                      style: TextStyle(
                        color: Theme.of(context).colorScheme.onPrimary,
                        fontSize: 9,
                      ),
                    ),
                  ],
                )
              ],
            ),
            color: Theme.of(context).colorScheme.onPrimary,
          ),
        ],
      ),
      body: profileState.when(
        data: (profile) {
          return SingleChildScrollView(
            child: Column(
              children: [
                Stack(
                  alignment: Alignment.bottomCenter,
                  clipBehavior: Clip.none,
                  children: [
                    Container(
                      color: Theme.of(context).colorScheme.primary,
                      width: double.infinity,
                      padding:
                          const EdgeInsets.fromLTRB(16.0, 10.0, 16.0, 70.0),
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
                                      fontSize: 24,
                                      fontWeight: FontWeight.bold),
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
                                  child: Text(
                                    profile.joinDate,
                                    style: const TextStyle(
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
                                color: Theme.of(context)
                                    .colorScheme
                                    .primaryContainer,
                                borderRadius: BorderRadius.circular(8),
                              ),
                              child: Text(
                                profile.status ?? "",
                                style: const TextStyle(
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
                              builder: (context) => LoanView(),
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
          );
        },
        error: (error, stackTrace) {
          return Center(
            child: Text("Failed to load home: $error"),
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
