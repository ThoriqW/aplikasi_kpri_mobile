import 'package:aplikasi_kpri_mobile/providers/loan_providers.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class DropDownMonth extends ConsumerStatefulWidget {
  const DropDownMonth({super.key});

  @override
  ConsumerState<DropDownMonth> createState() => _DropDownMonthState();
}

class _DropDownMonthState extends ConsumerState<DropDownMonth> {
  int _dropdownValue = 1;

  void dropdownMonthCallback(int selectedValue) {
    setState(() {
      _dropdownValue = selectedValue;
      ref.watch(loanStateProvider.notifier).getMonth(_dropdownValue);
    });
  }

  @override
  Widget build(BuildContext context) {
    return DropdownButton<int>(
      value: _dropdownValue,
      icon: const Icon(Icons.arrow_drop_down),
      underline: Container(),
      items: List.generate(12, (index) => index + 1)
          .map<DropdownMenuItem<int>>(
            (int value) => DropdownMenuItem(
              value: value,
              child: Text('$value Bulan'),
            ),
          )
          .toList(),
      onChanged: (int? value) {
        if (value != null) {
          dropdownMonthCallback(value);
        }
      },
    );
  }
}
