'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "69a904ac9adfbefaa69a720e4c13780a",
".git/config": "f81cff03e787376a3a0f04132765818e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5944f421ce3087eee712f31fb1ca955d",
".git/gk/config": "d02771d01e20cd7872a6c7d3c67c71fe",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ba40a396beae8eda80dbf05a58125ee9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ec39ca78798d66806dcd56cca47b38de",
".git/logs/refs/heads/master": "ec39ca78798d66806dcd56cca47b38de",
".git/logs/refs/remotes/origin/main": "8fc11c44456e1b3fc6f186424cbd5ae1",
".git/logs/refs/remotes/origin/master": "1521624e21268597c572036c576eceaf",
".git/objects/02/a82da16664d91d26e599f713cc505764d70802": "040080ab6061147149d924a9f999ae5a",
".git/objects/03/e0d071de27e73300133345064ff8dd2a9c41f0": "5230e5825b30003141f10b56ce7a16ee",
".git/objects/04/c00fd80f79c59813686ef1fb83e7473ee54352": "49f8e391f74dc1897f0e524be6754f35",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/09/67ef424bce6791893e9a57bb952f80fd536e93": "468eadae31baf8cd84e8ef7fc78d49ac",
".git/objects/0c/0ad747479a621b5e6f0bd8cd6ed65b7e6516dc": "7f246dfe66d3bbf1e5be9edeed540d1b",
".git/objects/0f/03f08b3acc8adc41e779491d8c5f5c525531f0": "c0ed4d23f211a8e5aca983b73c1f0fd5",
".git/objects/12/74905b28c3685c1b604cec482bc58bfd7edc08": "a2d949c98d3af72e876996dc30ab89d5",
".git/objects/16/e952dc812a9088a6c3c4fe7de798f5b3c75fb1": "8fd99acabccdf5577950fc87b5037744",
".git/objects/17/5dd34db23de8ead41492fef97f0385dd706e1b": "1ab5d1a6801448131d387b64c7836c8b",
".git/objects/18/3e34a592d2304bed40a2764ae69fe5bcb41c37": "e7088a4dea2485f397730c02fb80cc74",
".git/objects/1c/28eddd67262cc9a568a8da41e527777b2103f0": "456c55224e3b382c05f5a8643ba6e327",
".git/objects/1e/4be45efe6b5bae226c74ed5c536a3066b55da3": "f4bcaab2e9580338af1b4a601c857962",
".git/objects/1e/d96c32c4173e7e0f8391d984fd6a6abfbf455f": "0da2d16d5f55d2b5ff9ec4c10fabdb3a",
".git/objects/1e/f5070c300abacc179253caff3d8a42598c794d": "f488954750cb223ddaacc5e5c4b2e0e8",
".git/objects/21/fddebdd49814bc9db2e6f7e85d6c11de50cc9b": "36eb369f0bc9114a3adbfaead2c01068",
".git/objects/23/891fbe69ec31ce1f26389ba512709279686fba": "596834d763451a26984063fb9c243580",
".git/objects/25/454d78a86f4353b922fdd22c8d215eadaffe2e": "73d65b027c42056305976a1a0b5423c5",
".git/objects/2b/45c3667efcd099eb23133c546c2568d009536e": "296f108e4f0f800590b5389726313e7e",
".git/objects/2b/742859451a7016700a47780c8bc5d893957822": "2e6b175cf179587322d41b6076588f45",
".git/objects/2c/0ddef81f6d2c44663927008ca9d9978b829077": "e078d5796b6610363b2a957ba19bba26",
".git/objects/31/61eae5aff5e629158bbf3926343cbcbecd56e5": "a329b45deccfee5def5bbb1ced5628d5",
".git/objects/37/9da3d890a8f8717b1761c1a64f7975bb99f02f": "a0fddb25bd15fb8022eb1733b8c081f5",
".git/objects/37/efdc8b22142d62859b30bfd32fad941313b6a1": "3e724662f28590bc7c213ee7c2f6fd15",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3f/964cd31552cb5e572dc89ebfba33b68601f100": "c8a02c669dc2102913b4741e48e54ed1",
".git/objects/41/c2f0137b577a9f0e021fe720592187f706e074": "8ebb5a5b27304bdd6b4f7786b94f4dd6",
".git/objects/46/7e5f893157da452df196c98e90d60e3dd87364": "d9e730da07060b7a45e525731bc49fee",
".git/objects/4c/5764b0759c0ba49d6b982ce2381e6df849d0a6": "e45885160a72674a229e6f85fcedc8aa",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/5d/daebaa98effc495fa9c6e182726b63e37ee5e0": "8af0fa91c0970f00f3b6d5dbb07ea2a8",
".git/objects/66/49bfc91d51c72ec5cf3b0c9236e8d88c2779a8": "38b46d23fa58f5e7a7471c3517c96ea2",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/d31a1813cf85e38acf1b9e98e6fe7d9eb892e8": "c54afe488fa340ed27eb146928f2be6d",
".git/objects/6a/8743e34b32f5ee0708a4e1608326a693e5ce33": "5607d8b79b8c32af077fa7a0c0b2d91e",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6f/7b7c0964053cde0768ee9da2b276480f244403": "ed9fa194b48d8b667db85a7d84a8dc7e",
".git/objects/73/4d64a23fe53e2e77b3d9b13ea9d998f8f84c9a": "dcb7c478b9012f7a2f1d066763327f56",
".git/objects/75/b4bcd6f6a9c143b190a644c7adc0ef3952327d": "a62f985c6205d4e256e16629c30b4ac5",
".git/objects/76/08bd370f1ea90779289321d3a077cc6006effa": "0febab4f68de6d3bea7083e57f873829",
".git/objects/78/2171c8037ccd9187ccf76929934969983a158a": "31823b919dd14c53772f772f56b1f115",
".git/objects/7a/c53d8fde11940cab38896299f203d2dac15225": "882238cc7eed0ba67120eac6d069c83b",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/82/15f81e1163af47817f14b12e84128e6324ef88": "961458773e7f83cef84db8e3e0ef82a6",
".git/objects/82/6eeecdeea5996767f2abff37eb826b2faffcf3": "d5631a588e238fcfe6c80d3efc0ebd12",
".git/objects/84/c00e75d66cd2d045c51011e62f340befbef7e2": "af2ce7ef296aaaf340170ddd10fe7881",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/ea9a9ce06472dfa5e0e6ba5857af7940032430": "b6ff6fd6428420ced40afce172aa27b5",
".git/objects/8a/8611a5836243678f08e7b5081afee916be03b9": "6551043f49adab67a6b2923b0098ad6e",
".git/objects/8c/f1e68020f8c3da0da593b587302e6385cf2ca5": "c502183fd03f948986fadd860c8c0d43",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/98/c9782049a52c3fa5b073db9484e9c6f5a204b2": "fa5b4de9eb5223eade1a809251ae8bdd",
".git/objects/9c/645843f04e7c7409345e25464a4da18e0a4623": "fd25a42a1871be481a1b829fafb35b40",
".git/objects/a0/62f91e4a6b3792beac98cec734366b4a34f090": "f9ec19291449167b67e442b0c2f07978",
".git/objects/a0/67ca7fedcbadc7a8d6ee0f8761e54508a14697": "88c955b3108646fda589a6da2db43fb5",
".git/objects/a6/b73e557e5ce31c2ced6fb456826d475b0d24e1": "43321ab459796e22c9b1ff73c812db0b",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/aa/4c11176608e6d05d31fd86c82986046474156a": "6e55114cfd6385e388827b18c899f3be",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/1086edcde3def0e21b295c61d9997db6cedde7": "c65d0d930e8c32c9c4c6dab66062a576",
".git/objects/ae/4c4c4d32a1fa0042320482c00eee792e2e9870": "df5e10049107acf390ac56a571bdc111",
".git/objects/b4/111f37b44419c2466cde36c425c4da275caebb": "2dc13f402c2db6d6e023c3036711d305",
".git/objects/b7/e3ca25f99b81f79094903c774826c4eb518232": "33ff229602459bed846b62a5520af7e3",
".git/objects/b8/f57ee0769d1bce2c403a079bca11c6228906ba": "d0f190a3add4c807c4bb788025405ccd",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/be/f4f51a1d8147010d9cea15598334491f0e1692": "a7c837a83a0771d9e18d6cf0578a97d3",
".git/objects/c4/bc73fb2d6ecffafc790866644913c895343907": "3938b62f89e4a081153f1a34f7657d89",
".git/objects/c5/018676ea290191e76da8ddf742958e7e632aa9": "ecfcf50fddd8c7261abd1422de166a29",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ca/5e25f489c8f675aeb32836b5b3a4341e5ecd13": "b33fb1ca2cc8b590a945a642c8424bf5",
".git/objects/cb/1e1c5ab1ab3fc0d79e626cf2990e39c2c952a9": "720eda27df5df8bd5a548ffe067745f7",
".git/objects/cf/ccb5e67339cf1bd33f8bd2b5aa1cc1f3a8e3cf": "8a7b3fac732a2eeb8c3d15aa865b982d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/1602a1c43740850b54019d17454ea8eafe2719": "71a801e1881282dcabc23d5a5b773faf",
".git/objects/d6/064f6dd35a406835819d4e009b7e32fb565c28": "9598d734b6e3429edf7d0c1de6924f2a",
".git/objects/d6/bead0448e353ee28c3a23de04ea80e8098a406": "5eab78de34e3e9b77c76005f75ddbbd7",
".git/objects/d6/e11d134baf859164136319b99c30f25af633c7": "8ee0b26d6823cad03c81bf46bf81e0c5",
".git/objects/d7/5a555f99418f26924b897c03350cde9cfcbc15": "346b8ab4a050a90cb193435cbea642a1",
".git/objects/d7/9e5adb2fd5c3c6cdc63bf5d2c9481bf9bc0a93": "5c0ea921e51f7412d7e5b2b65bde4662",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/df76c6fcc96484cf396568216b4eb317d666ac": "19d9fca74607de830361a3bc909e7be2",
".git/objects/df/b685e31c9240ff174fdabcbb3293fabbb7ea37": "f4b9a1cc92957caa0fd279b62cab7ce4",
".git/objects/e0/5b9673a5d90170512a8f338ae33bf36e335082": "14477d166f09f502ce153324d8717af3",
".git/objects/e5/30cf836a1ff4cc7ccc7d293bdb609482881509": "8285fd7c864c1a842afb202d51fb45ba",
".git/objects/ef/ce2db5c48b23ff50dfecc5c96d9f381ad8f91f": "2e3b9d85a1318e70db4600b64b161f94",
".git/objects/f0/8113cf6b90d8db520bd8144bf8e7d4ec695b4f": "6928477c55ddcce7864a58b1ee18cb7f",
".git/objects/f1/b8ffb0f98f0870bcea609bfd756a24108f3c83": "08c2d039a482a2b8f890b7da70ec2844",
".git/objects/f1/cc9878343ec1c2bb0d54e0045ec87927773f85": "01a605e409a782e9cc7b44cc84dcb70d",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/cc4265dfdca357976927f7c0b75e932096dd3b": "5a3e3657252f3916e81b344ec58052eb",
".git/objects/f6/a312689ccf342b43e97aa4e92031f12849040e": "9812b58765607335dc529c4351811662",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fa/f7c4d5b5f384b84de79291e9d76c4fa6e6aa7f": "518b2c2c2315c3968b8c5a550cb9525f",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/128233a107072c0b0702d5a08c2ba194e0c721": "6b2a26c3470b38280b1556f2e0403f48",
".git/objects/ff/80df999e3282a0c03bf1fbff93f18523d0c07c": "8b897280b00630048e2ef2197bdf563a",
".git/objects/pack/pack-f93e1f7900fe272ee9859870150ba0bc179281b3.idx": "3fc3b3156ce4e173890c33bc4af2eb8d",
".git/objects/pack/pack-f93e1f7900fe272ee9859870150ba0bc179281b3.pack": "b7b2a286b527dcf9211b99c9997ad2bd",
".git/objects/pack/pack-f93e1f7900fe272ee9859870150ba0bc179281b3.rev": "3d62217f344a9b640c38ec20b402ac0d",
".git/refs/heads/master": "cd3e7a47a82aa48d434c54ac6c6a83f8",
".git/refs/remotes/origin/main": "fda15a260219be7dfe53b80e122f3c88",
".git/refs/remotes/origin/master": "cd3e7a47a82aa48d434c54ac6c6a83f8",
"assets/AssetManifest.bin": "85c183cf1e84d833b357c6aa717f0669",
"assets/AssetManifest.bin.json": "a266611ed1bf257dc4ce488ff76cb31c",
"assets/assets/config/color.json": "40c689b3b66ffbb34f8c77fe35a0dd52",
"assets/assets/config/colors.json": "ad0d908159225e90dc1924b63c073f50",
"assets/assets/config/language/en.json": "8a80554c91d9fca8acb82f023de02f11",
"assets/assets/config/language/zh.json": "a23c3d641c6a66e043db4845f6987a2c",
"assets/assets/config/language.json": "561178a5945117a9dff9c4461501432e",
"assets/assets/config/register.json": "e1ff0c647c0bf6c6986eb705ffb76803",
"assets/assets/config/settings_pages.json": "ebee382bf876b0d03dbbf72a668d1b0b",
"assets/assets/config/system.json": "acce2eb7e6a7537805dc513648f639ca",
"assets/assets/config/theme.json": "a37b506206e090a55a13b7496e59f87f",
"assets/assets/config/tutorial/en.json": "8a80554c91d9fca8acb82f023de02f11",
"assets/assets/config/tutorial/tutorial.json": "8a80554c91d9fca8acb82f023de02f11",
"assets/assets/config/tutorial/zh.json": "8a80554c91d9fca8acb82f023de02f11",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Bold.ttf": "52e5e29a7805a81bac01a170e45d103d",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Light.ttf": "9ef30f36fbe394633b7235332346f5b1",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Medium.ttf": "518133df6fcaf4237f97187e2ea1019e",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Regular.ttf": "778bb9a271006ab9d103287699611325",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-SemiBold.ttf": "b7bae4f584fc5d817de4178708946eb0",
"assets/assets/icon/icon.webp": "8cc3162fd5a56ec5fcd0dcbca2406e4e",
"assets/assets/image/symbolize/ai_dark.svg": "e17b21a347d9341c938b67bc1b87f223",
"assets/assets/image/symbolize/ai_light.svg": "38b96faff9ad67ad14113421717b4c38",
"assets/assets/image/symbolize/error.svg": "8db75780056c369f3f221f5b0277c0c9",
"assets/FontManifest.json": "9f0e757b134b904e3fc90aa9b50f799b",
"assets/fonts/MaterialIcons-Regular.otf": "35059436a5b65de30067ef3bfa943c6b",
"assets/NOTICES": "6f71405fd9e6228c8175eaa93228edce",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "45f8e5c7ec79c178cf5f482d803e978d",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "fb1a95b0d65847cfad08f45be768e182",
"icons/Icon-192.png": "e6bcc83274f124537386f2af54ab5644",
"icons/Icon-512.png": "34bb816a797926acf4bcfca7a2d04339",
"icons/Icon-maskable-192.png": "e6bcc83274f124537386f2af54ab5644",
"icons/Icon-maskable-512.png": "34bb816a797926acf4bcfca7a2d04339",
"index.html": "41fc645a4606f0a87aea9d44ad3d98d7",
"/": "41fc645a4606f0a87aea9d44ad3d98d7",
"main.dart.js": "a709390a7573fe9d22b64fa30dfa4640",
"main.dart.mjs": "7bfa198233895dac4a41b59598d14d05",
"main.dart.wasm": "fe021d39e4ec7fc579bfe793d4cea193",
"manifest.json": "b9a94ad211bf47da9046ba7890bdc3bf",
"splash/img/dark-1x.png": "21e14eec406cd5569538bcb2ec3bfc1f",
"splash/img/dark-2x.png": "34bb816a797926acf4bcfca7a2d04339",
"splash/img/dark-3x.png": "38d9cf4cd56cee9a65419868db98e90d",
"splash/img/dark-4x.png": "6890370be734180662f188f207dc278b",
"splash/img/light-1x.png": "21e14eec406cd5569538bcb2ec3bfc1f",
"splash/img/light-2x.png": "34bb816a797926acf4bcfca7a2d04339",
"splash/img/light-3x.png": "38d9cf4cd56cee9a65419868db98e90d",
"splash/img/light-4x.png": "6890370be734180662f188f207dc278b",
"version.json": "75edb15e6e631ad292ed6a59e4ff4e7d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
