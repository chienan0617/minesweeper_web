'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "69a904ac9adfbefaa69a720e4c13780a",
".git/config": "2ced945c2257d8e5fedcb7a937769df4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4cfe09790066413ea2ea447ca4104e0f",
".git/gk/config": "6c628742efe2ac55b5d031260d6be583",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "10d9427919c8d13b58a06313e812608d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6356e481af7342d1944fe546f7bbb26c",
".git/logs/refs/heads/main": "e1247e99881119a28f690a72fc63e012",
".git/logs/refs/remotes/origin/main": "5d43a8a5e9aca6fe5f50eeaaf08cff09",
".git/objects/02/a82da16664d91d26e599f713cc505764d70802": "040080ab6061147149d924a9f999ae5a",
".git/objects/03/e0d071de27e73300133345064ff8dd2a9c41f0": "5230e5825b30003141f10b56ce7a16ee",
".git/objects/04/1d11d2e87067e4a6c5545eafaa43565b315a81": "b934db3a25469caa61173b796b5b9380",
".git/objects/04/c00fd80f79c59813686ef1fb83e7473ee54352": "49f8e391f74dc1897f0e524be6754f35",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/09/67ef424bce6791893e9a57bb952f80fd536e93": "468eadae31baf8cd84e8ef7fc78d49ac",
".git/objects/0f/03f08b3acc8adc41e779491d8c5f5c525531f0": "c0ed4d23f211a8e5aca983b73c1f0fd5",
".git/objects/12/74905b28c3685c1b604cec482bc58bfd7edc08": "a2d949c98d3af72e876996dc30ab89d5",
".git/objects/16/e952dc812a9088a6c3c4fe7de798f5b3c75fb1": "8fd99acabccdf5577950fc87b5037744",
".git/objects/18/3e34a592d2304bed40a2764ae69fe5bcb41c37": "e7088a4dea2485f397730c02fb80cc74",
".git/objects/18/c92af20aa13e5483f325fdeb383090410a3a65": "0bcc1b96eb5e95e96872b660e70929e7",
".git/objects/1c/28eddd67262cc9a568a8da41e527777b2103f0": "456c55224e3b382c05f5a8643ba6e327",
".git/objects/1e/4be45efe6b5bae226c74ed5c536a3066b55da3": "f4bcaab2e9580338af1b4a601c857962",
".git/objects/23/f4d4652b7c6dd2763572f9015242579fa53385": "d6ec283b23ad6de34ad865bf912074f3",
".git/objects/2b/45c3667efcd099eb23133c546c2568d009536e": "296f108e4f0f800590b5389726313e7e",
".git/objects/2b/742859451a7016700a47780c8bc5d893957822": "2e6b175cf179587322d41b6076588f45",
".git/objects/2b/b49c4942fcf7bcc709eb4cda8c90418cb3c48c": "63cca25b235772762b9664462d1f2857",
".git/objects/31/61eae5aff5e629158bbf3926343cbcbecd56e5": "a329b45deccfee5def5bbb1ced5628d5",
".git/objects/34/11e47982792096f55883e76d0ad9ddfe33d7fb": "56704c07a4e92a7af53f023266ef9e05",
".git/objects/35/d735d09986110b35a5283653e77e81372d05bd": "4dab6fcbba439208d46831f655cebb17",
".git/objects/37/9da3d890a8f8717b1761c1a64f7975bb99f02f": "a0fddb25bd15fb8022eb1733b8c081f5",
".git/objects/37/efdc8b22142d62859b30bfd32fad941313b6a1": "3e724662f28590bc7c213ee7c2f6fd15",
".git/objects/38/1deaedda6122871b912cb235e3604618e8244c": "8560072d34e419920519477061ef5ce2",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3f/964cd31552cb5e572dc89ebfba33b68601f100": "c8a02c669dc2102913b4741e48e54ed1",
".git/objects/43/6664ec8853331c63a8043723c4467fc507bf34": "badf3ec531dc9ac3e4671eb937667194",
".git/objects/44/a7ada2e78071a20d9a417a0544a77725837215": "3b9f18aa6da5d8c772727b27c07404cb",
".git/objects/49/82fbfb3532bbd81fd76e5d51d0517e71d3f855": "76d6682a0fe99dedfbd9f21e93f57b18",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/56/cd6904492f70f22021da50f9ded1a59fac80e4": "eff1ec477617a35f10ccf97b7e282ed4",
".git/objects/61/661c0a601990ed354a967a1f0cf08aec400be5": "f3c63422cec740ee004e410a7f2c3622",
".git/objects/61/b46fbd9365110a904e35ae7938213c3ef1adc0": "a1be37b372c691807873ef776ce3a3ff",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6a/8743e34b32f5ee0708a4e1608326a693e5ce33": "5607d8b79b8c32af077fa7a0c0b2d91e",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6f/7b7c0964053cde0768ee9da2b276480f244403": "ed9fa194b48d8b667db85a7d84a8dc7e",
".git/objects/76/08bd370f1ea90779289321d3a077cc6006effa": "0febab4f68de6d3bea7083e57f873829",
".git/objects/7a/c53d8fde11940cab38896299f203d2dac15225": "882238cc7eed0ba67120eac6d069c83b",
".git/objects/7c/1b44215df244f6f0fc4ad6b4384c186422b966": "d5df1219615548ec7c35e45be00bd27f",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/82/15f81e1163af47817f14b12e84128e6324ef88": "961458773e7f83cef84db8e3e0ef82a6",
".git/objects/82/6eeecdeea5996767f2abff37eb826b2faffcf3": "d5631a588e238fcfe6c80d3efc0ebd12",
".git/objects/83/54804bfdd9ce7df7e68216d8074baae3efe8dd": "2205045b5543d94b5447811c2d1a1960",
".git/objects/83/54dc8b6054c72b6766570b272ed97f9e7a2393": "d2b6de11549dcb3a7343f9dade0c80be",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/8a/8611a5836243678f08e7b5081afee916be03b9": "6551043f49adab67a6b2923b0098ad6e",
".git/objects/8c/f1e68020f8c3da0da593b587302e6385cf2ca5": "c502183fd03f948986fadd860c8c0d43",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/a1ae9990dfe7c51413c711ce48f5a78cf28cb1": "67021a660f6d8c752208664b3080ecac",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9a/96a9d996809e7d0c78da3bdc1a154b33850715": "3d978abde1b4f479a370e213794effab",
".git/objects/a0/67ca7fedcbadc7a8d6ee0f8761e54508a14697": "88c955b3108646fda589a6da2db43fb5",
".git/objects/a6/b73e557e5ce31c2ced6fb456826d475b0d24e1": "43321ab459796e22c9b1ff73c812db0b",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/aa/4c11176608e6d05d31fd86c82986046474156a": "6e55114cfd6385e388827b18c899f3be",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/1086edcde3def0e21b295c61d9997db6cedde7": "c65d0d930e8c32c9c4c6dab66062a576",
".git/objects/ae/4c4c4d32a1fa0042320482c00eee792e2e9870": "df5e10049107acf390ac56a571bdc111",
".git/objects/b4/111f37b44419c2466cde36c425c4da275caebb": "2dc13f402c2db6d6e023c3036711d305",
".git/objects/b7/e3ca25f99b81f79094903c774826c4eb518232": "33ff229602459bed846b62a5520af7e3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bf/156ad92c5331ed5aa467300076290c612d3a9d": "c74b0d1fa27ecb5f913636dcb79764ff",
".git/objects/c2/49669d7f004cb9e98f716b6d5eb745778d7482": "38b284003d1c1d51891fb0b0577a9a36",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cd/897ab0c34a1aa7ad5fbf4b703f2beb2031b6ee": "6abdead07d3175d1282be3f402aa57bd",
".git/objects/cf/ccb5e67339cf1bd33f8bd2b5aa1cc1f3a8e3cf": "8a7b3fac732a2eeb8c3d15aa865b982d",
".git/objects/d1/2f05bc5f5c0dc1e45e6c2757deb71917cb8371": "faafc1b65a6fe76fcfbf45bcab954fc6",
".git/objects/d1/44d8376f73bd84b243e1a961863e2901f08a82": "b2b50ded6793795663079b8d24736ae1",
".git/objects/d3/3f719dd9c3f4c0c1dc6dc3e082f8de16781b28": "c2c76019681db81e3a326540b03249a9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/1602a1c43740850b54019d17454ea8eafe2719": "71a801e1881282dcabc23d5a5b773faf",
".git/objects/d6/064f6dd35a406835819d4e009b7e32fb565c28": "9598d734b6e3429edf7d0c1de6924f2a",
".git/objects/d6/bead0448e353ee28c3a23de04ea80e8098a406": "5eab78de34e3e9b77c76005f75ddbbd7",
".git/objects/d6/e11d134baf859164136319b99c30f25af633c7": "8ee0b26d6823cad03c81bf46bf81e0c5",
".git/objects/d7/5a555f99418f26924b897c03350cde9cfcbc15": "346b8ab4a050a90cb193435cbea642a1",
".git/objects/d7/9e5adb2fd5c3c6cdc63bf5d2c9481bf9bc0a93": "5c0ea921e51f7412d7e5b2b65bde4662",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/dd/e7317c86c916eb0a10d5d6c53e6d7d37590a9d": "e7cfcd70b85bb69104a6ced032ee2f4e",
".git/objects/df/ce9a2edcff08e61d574b971587a4faf2c694e1": "f09831b763919ced019853e74dfab401",
".git/objects/e0/5b9673a5d90170512a8f338ae33bf36e335082": "14477d166f09f502ce153324d8717af3",
".git/objects/e5/30cf836a1ff4cc7ccc7d293bdb609482881509": "8285fd7c864c1a842afb202d51fb45ba",
".git/objects/ea/907c405e5976c08641a962005877338fa24203": "adb7415d00a7f64eb203dc7e04bb0c95",
".git/objects/ec/3fcd18534138413bcab34c495bc4bb4743d1a1": "3210fb821438ed7998765d9d06dc4eb0",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/cc4265dfdca357976927f7c0b75e932096dd3b": "5a3e3657252f3916e81b344ec58052eb",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/4a6145554309a14aa12fbd7e99e5c7d1fe3eaa": "d24a0ef5965b47d02b0f57a8633d5e9b",
".git/objects/fa/f7c4d5b5f384b84de79291e9d76c4fa6e6aa7f": "518b2c2c2315c3968b8c5a550cb9525f",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "818e971db1ea48a1b49e0abf850b8d47",
".git/refs/remotes/origin/main": "818e971db1ea48a1b49e0abf850b8d47",
"assets/AssetManifest.bin": "b8ca3c8da0927f7a63e9c5dd3d639615",
"assets/AssetManifest.bin.json": "bf74482e21f1a33f06973077c845753d",
"assets/assets/config/color.json": "40c689b3b66ffbb34f8c77fe35a0dd52",
"assets/assets/config/colors.json": "ad0d908159225e90dc1924b63c073f50",
"assets/assets/config/language/en.json": "8a80554c91d9fca8acb82f023de02f11",
"assets/assets/config/language/zh.json": "a23c3d641c6a66e043db4845f6987a2c",
"assets/assets/config/language.json": "561178a5945117a9dff9c4461501432e",
"assets/assets/config/register.json": "e1ff0c647c0bf6c6986eb705ffb76803",
"assets/assets/config/settings_pages.json": "ebee382bf876b0d03dbbf72a668d1b0b",
"assets/assets/config/system.json": "000620d5e9a02874367a51e3858e99f2",
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
"assets/assets/image/symbolize/error.svg": "8db75780056c369f3f221f5b0277c0c9",
"assets/FontManifest.json": "9f0e757b134b904e3fc90aa9b50f799b",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "68bd116ca9a932ad2ec53d68060ade73",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_arbitrary.frag": "165123cf809bb7cea0f60cdb8658f67a",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_filter.frag": "7a69a481c4b01af713dc9d1ba40463fa",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_final_render.frag": "77416b256a173eb8a39a26e00899bc1a",
"assets/packages/liquid_glass_renderer/lib/assets/shaders/liquid_glass_geometry_blended.frag": "884d38ba3a7ab0ab72a463611f229e53",
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
"flutter_bootstrap.js": "dcb59b56ccb5b4390bd8cfa64b1e68e0",
"icons/Icon-192.png": "e6bcc83274f124537386f2af54ab5644",
"icons/Icon-512.png": "34bb816a797926acf4bcfca7a2d04339",
"icons/Icon-maskable-192.png": "e6bcc83274f124537386f2af54ab5644",
"icons/Icon-maskable-512.png": "34bb816a797926acf4bcfca7a2d04339",
"index.html": "de1a582a5cda78cb8247177dab19970c",
"/": "de1a582a5cda78cb8247177dab19970c",
"main.dart.js": "d172dd226b5fa301586aa819a6690dbf",
"main.dart.mjs": "b9625612e4133cc9334b87242145918f",
"main.dart.wasm": "b15088ab480fdccf157b7400429ddd7a",
"manifest.json": "b9a94ad211bf47da9046ba7890bdc3bf",
"README.md": "829ab90c447d0f6860d8f08a188b2d47",
"splash/img/dark-1x.png": "21e14eec406cd5569538bcb2ec3bfc1f",
"splash/img/dark-2x.png": "34bb816a797926acf4bcfca7a2d04339",
"splash/img/dark-3x.png": "38d9cf4cd56cee9a65419868db98e90d",
"splash/img/dark-4x.png": "6890370be734180662f188f207dc278b",
"splash/img/light-1x.png": "21e14eec406cd5569538bcb2ec3bfc1f",
"splash/img/light-2x.png": "34bb816a797926acf4bcfca7a2d04339",
"splash/img/light-3x.png": "38d9cf4cd56cee9a65419868db98e90d",
"splash/img/light-4x.png": "6890370be734180662f188f207dc278b",
"version.json": "0a331535f24f1fcde89afd5989cee19e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
