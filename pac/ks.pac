[General]
bypass-system = true
skip-proxy = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, localhost, *.local, e.crashlytics.com, captive.apple.com
bypass-tun = 10.0.0.0/8,100.64.0.0/10,127.0.0.0/8,169.254.0.0/16,172.16.0.0/12,192.0.0.0/24,192.0.2.0/24,192.88.99.0/24,192.168.0.0/16,198.18.0.0/15,198.51.100.0/24,203.0.113.0/24,224.0.0.0/4,255.255.255.255/32
dns-server = system, 114.114.114.114, 112.124.47.27, 8.8.8.8, 8.8.4.4

[Rule]

# 国内网站直连
# GEOIP,CN,DIRECT

# 过滤
DOMAIN-SUFFIX,kuaishou.com,proxy
DOMAIN-SUFFIX,yximgs.com,proxy
DOMAIN-SUFFIX,bdimg.com,proxy
DOMAIN-SUFFIX,kwimgs.com,proxy

# 其他网站代理
FINAL,DIRECT
