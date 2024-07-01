import 'dart:async';

import 'package:aplikasi_kpri_mobile/models/loan.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'loan_provider.g.dart';

@riverpod
class LoanNotifier extends _$LoanNotifier {
  @override
  Loan? build() => null;

  final double interest = 0.02;
  int month = 1;

  void getMonth(int newMonth) {
    month = newMonth;
  }

  Future<int> calculateInterest(int loan) async {
    int totalInterest = (interest * loan).toInt();
    return totalInterest;
  }

  Future<int> calculateMonthPayment(int loan) async {
    final monthlyPayment = (loan ~/ month).toInt();
    return monthlyPayment;
  }

  Future<void> calculateLoan(int loan) async {
    final totalInterest = await calculateInterest(loan);
    final monthlyPayment = await calculateMonthPayment(loan);
    final totalLoan = monthlyPayment + totalInterest;
    state = Loan(
      loan: loan,
      month: month,
      monthlyPayment: monthlyPayment,
      interest: totalInterest,
      totalLoan: totalLoan,
    );
  }
}
