import 'package:flutter/material.dart';

const List<String> month = <String>['1 Bulan', '2 Bulan', '3 Bulan', '4 Bulan'];

class DropDownMonth extends StatefulWidget {
  const DropDownMonth({super.key});

  @override
  State<DropDownMonth> createState() => _DropDownMonthState();
}

class _DropDownMonthState extends State<DropDownMonth> {
  String _dropdownValue = month.first;

  void dropdownMonthCallback(String? selectedValue) {
    if (selectedValue is String) {
      setState(() {
        _dropdownValue = selectedValue;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return DropdownButton<String>(
      value: _dropdownValue,
      icon: const Icon(Icons.arrow_drop_down),
      underline: Container(),
      items: month
          .map<DropdownMenuItem<String>>((String value) => DropdownMenuItem(
                value: value,
                child: Text(value),
              ))
          .toList(),
      onChanged: (String? value) {
        dropdownMonthCallback(value);
      },
    );
  }
}
