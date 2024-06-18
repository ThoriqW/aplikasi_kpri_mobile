import 'package:aplikasi_kpri_mobile/utils/global_colors.dart';
import 'package:aplikasi_kpri_mobile/views/splash_view.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:get/get.dart';

void main() {
  runApp(const ProviderScope(
    child: MyApp(),
  ));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: GlobalColors.primaryColor),
        useMaterial3: true,
        fontFamily: 'Poppins',
      ),
      home: const SplashView(),
    );
  }
}
