import 'package:aplikasi_kpri_mobile/utils/global_colors.dart';
import 'package:aplikasi_kpri_mobile/widgets/button_global.dart';
import 'package:flutter/material.dart';

class LoginView extends StatefulWidget {
  const LoginView({super.key});

  @override
  State<LoginView> createState() => _LoginViewState();
}

class _LoginViewState extends State<LoginView> {
  final TextEditingController _nikController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: GlobalColors.primaryColor,
      body: Center(
        child: SingleChildScrollView(
          child: Container(
            alignment: Alignment.center,
            width: double.infinity,
            padding: const EdgeInsets.all(35.0),
            child: Column(
              children: [
                const Text(
                  "Aplikasi Koperasi Simpan Pinjam",
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 24,
                  ),
                ),
                const SizedBox(height: 30),
                Image.asset("assets/images/logo.png"),
                const SizedBox(height: 30),
                Form(
                  child: Column(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(20),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: Column(
                          children: [
                            TextFormField(
                              controller: _nikController,
                              keyboardType: TextInputType.number,
                              decoration: const InputDecoration(
                                filled: true,
                                hintText: "NIK",
                                contentPadding: EdgeInsets.symmetric(
                                  horizontal: 15,
                                  vertical: 12,
                                ),
                                border: InputBorder.none,
                              ),
                            ),
                            const SizedBox(height: 15),
                            TextFormField(
                              controller: _passwordController,
                              keyboardType: TextInputType.text,
                              obscureText: true,
                              decoration: const InputDecoration(
                                filled: true,
                                hintText: "Password",
                                border: InputBorder.none,
                                contentPadding: EdgeInsets.symmetric(
                                  horizontal: 15,
                                  vertical: 12,
                                ),
                              ),
                            ),
                            const SizedBox(height: 20),
                            ButtonGlobal(
                              text: "Login",
                              onTap: () {},
                            ),
                            const SizedBox(height: 16),
                            Text(
                              "Lupa Password?",
                              style: TextStyle(
                                color: GlobalColors.primaryColor,
                              ),
                            ),
                          ],
                        ),
                      )
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
