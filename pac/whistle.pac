function FindProxyForURL(url, host) {
  if (shExpMatch(url, "*.zhuanzhuan.com") || shExpMatch(url, "*.zhuanstatic.com")|| shExpMatch(url, "*.zhuanspirit.com")
    || shExpMatch(url, "*.zhuancorp.com")|| shExpMatch(url, "*.zhuan.58.com")) {
    return "PROXY 10.242.22.65:8899;DIRECT";
  }
  return "DIRECT";
}
