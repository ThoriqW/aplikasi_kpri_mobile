import 'package:aplikasi_kpri_mobile/views/home_view.dart';
import 'package:aplikasi_kpri_mobile/views/invoice_view.dart';
import 'package:aplikasi_kpri_mobile/views/notification_view.dart';
import 'package:aplikasi_kpri_mobile/views/profile_view.dart';
import 'package:flutter/material.dart';

class MainView extends StatefulWidget {
  const MainView({super.key});

  @override
  State<MainView> createState() => _MainViewState();
}

class _MainViewState extends State<MainView> {
  List pages = [
    const HomeView(),
    const InvoiceView(),
    const NotificationView(),
    const ProfileView(),
  ];
  int currentIndex = 0;

  void onTap(int index) {
    setState(() {
      currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: pages[currentIndex],
      resizeToAvoidBottomInset: false,
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        elevation: 0,
        onTap: onTap,
        currentIndex: currentIndex,
        selectedFontSize: 12,
        unselectedFontSize: 12,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Beranda',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.payment),
            label: 'Tagihan',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.notification_add),
            label: 'Notifikasi',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Akun',
          ),
        ],
        backgroundColor: Theme.of(context).colorScheme.primaryContainer,
      ),
    );
  }
}
