class Authentication {
  final int code;
  final String status;
  final String message;
  final String token;
  final int id;

  Authentication({
    required this.code,
    required this.status,
    required this.message,
    required this.token,
    required this.id,
  });

  factory Authentication.fromJson(Map<String, dynamic> json) {
    return Authentication(
      code: json["code"],
      status: json["status"],
      message: json["message"],
      token: json["token"],
      id: json["id"],
    );
  }
}
