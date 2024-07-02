class Authentication {
  final int id;
  final String token;

  Authentication({
    required this.id,
    required this.token,
  });

  factory Authentication.fromJson(Map<String, dynamic> json) {
    return Authentication(
      id: json["id"],
      token: json["token"],
    );
  }
}
