import { acceptHMRUpdate, defineStore } from "pinia";



const store = defineStore("main", {
	state() {
		return {
			config: {
				protocol: ["tcp"], // 网络协议
				serverUrl: "public.easytier.top:11010",
				networkName: "",
				networkPassword: "",
				hostname: "",
				ipv4: "",
				proxyNetworks: "", // 子网代理
				autoStart: false, // 是否自动启动
				connectAfterStart: false, //软件打开后，是否自动连接
				disableIpv6: false, // 是否禁用IPv6
				port: "11010", // 监听端口号
				enableCustomListener: true, // 是否自定义监听
				enableCustomListenerV6: true, // 是否自定义IPV6监听
				customListenerV6Data: "udp://[::]:11010", //自定义ipv6监
				customListenerData: "tcp://0.0.0.0:11010\nudp://0.0.0.0:11010\ntcp://[::]:11010", // 自定义监听地址
				disbleListenner: false, // 是否禁用监听
				disableEncryption: false, // 是否禁用加密
				multiThread: false, //使用多线程
				enablExitNode: false, // 是否启用退出节点
				noTun: false, // 是否使用TUN
				latencyfirst: false, // 是否优先延迟
				useSmoltcp: false, // 是否为子网代理启用smoltcp堆栈
				disableUdpHolePunching: false, // 是否禁用UDP打洞
				relayAllPeerrpc: true, // 是否启用所有对等RPC
				disbleP2p: false, // 是否使用P2P
				dhcp: true, // 是否使用DHCP
				saveErrorLog: true, // 是否保存错误日志
				logLevel: "error", //日志等级
				devName: true, //自定义网卡名
				devNameValue: "etgame", //自定义网卡名
				enableCustomProtocol: true, //自定义默认协议
				customProtocol: "tcp", //自定义默认协议
				enableNetCardMetric: true, //启用网卡自定义跃点
				netCardMetricValue: 1, //自定义网卡跃点值
				enablePreventSleep: false, //组织系统休眠
				compression: "none", //加密算法
				enableKcpProxy: true, //启用kcp代理  默认开启
				disableKcpInput: false, //禁用kcp输入
				enableQuicProxy: false, //启用quic代理  默认开启
				disableQuicInput: false, //禁用quic输入
				bindDeviceEnable: false, //是否绑定设备
				acceptDNS: false, //魔法dns
				privateMode: false, //是否启用私有模式

				enablePortForward: false, //是否启用端口转发
				portForwardData: "", //端口转发数据
			},
			serverConfig: {
				enableWhiteList: true, // 是否启用白名单
				relayAllPeerrpc: false, // 是否启用所有对等RPC
				serverWhiteList: "", // 服务器流量转发白名单
				// enableListener: true, // 是否启用监听
				autoStart: false, //随软件自启
				port: "11010", // 服务器端口
				privateMode: false, //是否启用私有模式
				privateNetworkName: "", // 私有模式房间名
				privateNetworkPassword: "", // 私有模式密码
			},
			cidrEnable: false,
			proxyForwardBySystem: false, // 是否通过系统内核转发子网代理数据包，禁用内置NAT
			basePeers: ["public.easytier.top:11010", "public.easytier.net:11010"],
			theme: false, //主题  false light true dark
			configStartEnable: false, //使用配置文件启动
			configPath: "", //配置文件路径
			winIpBcAutoStart: true,
			createConfigInEasytier: false, //在easytier目录生成config.json文件吗
			githubFastUrl: "https://ghfast.top/",

			// forceBindIp配置
			forceBindIpBit: "64",
			delayInjectDll: false,
			forceBindInput: "",
			forceBindFile: "",

			winipBcPid: 0,
			winipBcStart: false,
			latestTagName: "",

			gameList: [] as Array<{ name: string; exePath: string; id: string; coverImg?: string; showImg: string }> // 游戏列表
		};
	},
	persist: {
		// 防止持久化保存 用户使用config.json输入的无用的字段
		pick: [
			"config.protocol",
			"config.serverUrl",
			"config.networkName",
			"config.networkPassword",
			"config.hostname",
			"config.ipv4",
			"config.proxyNetworks",
			"config.autoStart",
			"config.connectAfterStart",
			"config.disableIpv6",
			"config.disableEncryption",
			"config.multiThread",
			"config.enablExitNode",
			"config.noTun",
			"config.latencyfirst",
			"config.useSmoltcp",
			"config.disableUdpHolePunching",
			"config.relayAllPeerrpc",
			"config.disbleP2p",
			"config.dhcp",
			"config.saveErrorLog",
			"config.logLevel",
			"config.devName",
			"config.devNameValue",
			"config.enableNetCardMetric",
			"config.netCardMetricValue",
			"config.port",

			"config.enablePortForward",
			"config.portForwardData",

			"config.disbleListenner",
			"config.enableCustomListener",
			"config.customListenerData",
			"config.enableCustomListenerV6",
			"config.customListenerV6Data",

			"config.enableCustomProtocol",
			"config.customProtocol",
			"config.enablePreventSleep",
			"config.compression",

			"config.enableKcpProxy",
			"config.disableKcpInput",
			"config.enableQuicProxy",
			"config.disableQuicInput",


			"config.bindDeviceEnable",

			"config.acceptDNS",

			"config.privateMode",

			"serverConfig.autoStart",
			// 'serverConfig.enableListener',
			"serverConfig.enableWhiteList",
			"serverConfig.relayAllPeerrpc",
			"serverConfig.serverWhiteList",
			"serverConfig.port",
			"serverConfig.privateMode",
			"serverConfig.privateNetworkName",
			"serverConfig.privateNetworkPassword",

			"cidrEnable",
			"proxyForwardBySystem",
			"basePeers",
			"theme",
			"configStartEnable",
			"configPath",
			"winIpBcAutoStart",
			"createConfigInEasytier",
			"githubFastUrl",

			"forceBindIpBit",
			"delayInjectDll",
			"forceBindInput",
			"forceBindFile",
			"latestTagName",
			
			"gameList"
		]
		// // 除了这些，其他都要存下来
		// omit: ["winipBcPid", "winipBcStart"]
	}
});
if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(store, import.meta.hot));
export default store;
