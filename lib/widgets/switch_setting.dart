import 'package:flutter/material.dart';

class SwitchSetting extends StatefulWidget {
  const SwitchSetting({super.key});

  @override
  State<SwitchSetting> createState() => _SwitchSettingState();
}

class _SwitchSettingState extends State<SwitchSetting> {
  bool isSwitched = false;

  @override
  Widget build(BuildContext context) {
    return Switch(
      value: isSwitched,
      onChanged: (value) {
        setState(
          () {
            isSwitched = value;
          },
        );
      },
    );
  }
}
