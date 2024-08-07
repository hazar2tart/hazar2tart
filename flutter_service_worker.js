'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/AUTO_MERGE": "783da1278916ddf7c76a1d3970556c8e",
".git/COMMIT_EDITMSG": "3532d11855ca175f717185077d3ca4ca",
".git/config": "b25bcf526d964101d535da68cdf74c64",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a223e5006fb85d45f9e2bbed76cd7364",
".git/HEAD": "18ac0d2124ad07e7ad46859cc7139ad6",
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
".git/index": "d94be9685607717ca189ce24e234e1f6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "65806cf66c32368806aa166d05fae4ac",
".git/logs/refs/heads/main": "c5f955d734a6e7b476b343d805fab88f",
".git/logs/refs/remotes/origin/main": "bf42f14e48ffff9b21e7ce32be321e84",
".git/MERGE_MSG": "874fbcd2a63cd91881b23870a9857cc0",
".git/objects/02/9c008ffadcc8eafadbf8547f7d913245f0e53a": "6908c972ba395946ca8fc39bb615417d",
".git/objects/03/9bcd8b8589a00335abf432bcef8572f6ea6921": "89302d4b01cc60929cecdb27c1db10ac",
".git/objects/08/5b6799e910b889ecf49ae158c318d5b7c4bb49": "bcb9ee5af4f24fccc7805de0f6604df5",
".git/objects/0c/19f4d0e296163a44c0b022e1a8350301b9f6b0": "754bf9703346112abbb2439bf83f3a54",
".git/objects/0e/3c4d4a7a5c7b5bb837149fe1b68e04d1f2d6e1": "edf38dfc69b539cabb1e9badd096c187",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/54cce83839f91e4a63804274503b961d9c0780": "8691dad21f2f8e9167a112c6ded93875",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/17/568e439d9932656c127b67af6ac608a329c63a": "e5650facccab4e64162724eee1c456ea",
".git/objects/17/eb3e14ce4f2f8950e26614a8f596176d12e932": "a23f67c5c7593cb3a8433adbeb6184f5",
".git/objects/17/ffa2d5d828642c62f45d14fd098dd3b9d7b870": "f0f90d9ac49edb644c6dffe36411fd20",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/b25cb039698a8cb1ae471a37ffcce2558f7ec7": "b64e0ef218f998f778e4a74e0f1a14c2",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1e/93fc1e3cea0ca8873d604d66fd026a1b5ed595": "7d8834564390ab63d4e8e6c7d55eb20c",
".git/objects/1f/4e46acce301f1f9bd401a82fc527fc39f5e9f5": "ba802872291cff8ef7dbeadbf7bab487",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/26/cc8670fa46a728e6d772087ce063be8ad4e713": "11f81799eb17bb4dfd5000e1ad2781ca",
".git/objects/29/d4484047841cde78c1a912edd7fcc3a4bd88a9": "4b11f4e04d0b93f0d3545f64c541af53",
".git/objects/2d/400db9fd58d5c6d78d5dcd7e5b1accb4d60555": "bb40eb776a419e29db3770f8050bf23b",
".git/objects/30/0caa1f58128dca57b1ad0828365540fa0e4c1a": "04fa9e70275c57092b101aabb50db4c8",
".git/objects/31/d5884bf9fd41b19bc0b29226e66113b7bf0d04": "efd41a3e35bf8b9471bb4c35e2173bc6",
".git/objects/32/2c0ebb815d9d09de52f3e596e701b0be05a290": "b56be99e2a72a151ba979319d565bf0f",
".git/objects/32/414fc87be054847cfecf6fe72124ab83fa7e49": "395bdbad5fab97361dd4e5436706c7c4",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/be4d0d3ba6a246f3f979719e65fa68c44f7b57": "8521600fa947bc5c18365c09527a9f84",
".git/objects/38/e90b29c16db8710a6e30ab70b8356923489632": "97fd6ea655b126385f26eba24f7ce4ad",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/9f838c8cc3592bd07dad68f3d239a17e4139ef": "8b9fa3c7c856250dc3f5d7f0ffa63bbe",
".git/objects/3d/21a608ac9b7c2ebd029577be3778054d22a3b2": "ea7286738bafa3077c6ad32d1d391667",
".git/objects/3e/cf7e3df5c34fbcbefa29b7ba758fbcb41769d3": "2e54b19ffee63f02a61a5da151cb3dde",
".git/objects/3f/9fc7387bf2564f50562e946bc9ac4fe4f05786": "c82251a478ced84f0ee643486bc53476",
".git/objects/42/8181cccdc71fe3f86846da4b35352e8f39b4d6": "4ee9bcfe447ebfdc70beca7a30352abb",
".git/objects/44/ac54f5b78fa536627de463c45bc65cde624495": "90ccc5e5112ef357fdb937af3d0d2c94",
".git/objects/47/611ce5018319337516cbfc0256d004dc594a70": "002195862ce29f4daf2a810098972eed",
".git/objects/49/2baae74216877a1f4ed6a1943e38df48d9f49c": "e3267461411431e592c13fc184bf40f6",
".git/objects/49/342d63f19dff68c0425dda3e2283764c182c72": "0c9efe97b5e771291369e61fcc2e8a3c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/d86e5fb0f54abc49259e14166e8734c39ef3d8": "0cc9946b6f02ecfb8120b8a3d5ad3412",
".git/objects/4c/e63ea2e2529f3f19a4fa6dfb41be257cb487dc": "0ac74abb42260af8ce9500345f241f60",
".git/objects/54/fdfb77cf54f6199212c655aa57f132f1cf2663": "06fe19bc6bcd31dfae2a1de3f55b2f04",
".git/objects/55/a0f77068601ca629e19aafa223eec6f583f7aa": "bfc223fd9abcab45950969cd16228787",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5b/a93f23ef2ef958f5514422d32fbe6b4742c1d7": "66258ea5bad7ef4ce5cfe7747084b7fe",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/96a896d770e67e8ed6da36373d310887a45c8a": "bbaf05c5abe475cdb2b00f3894092026",
".git/objects/62/6bf5d969be67f1988ac67edf1befa50fc5d1c2": "6c415e12a5141d3cf18ee40569268324",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/67/85397c56df518f6ae62cf414760bd8bff212d8": "e014bad7fe1ae8849ae40cba42a91d6d",
".git/objects/69/f102e4f329d9908b0384880768fbb22e456fc2": "075e0778d749fa14f322104b13eccf72",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/5911b94794b44785cf509c295e1ef170248c9f": "a893731624b58dbcb38eefbcc8f569eb",
".git/objects/70/644385b2567240b87c68a11de62950f02d088d": "ed99aec46b9b0e2b598027e9d6bfb5a6",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/623359202402bf44d6d0fe33743edbbf1f6042": "3c989a9b85a450a098f6a000f129f28c",
".git/objects/77/ca8617db4042d2c99e5a2cef6a88c9149b1a4c": "d99e45508e6f2f5329c15b66e739a8ab",
".git/objects/78/25db69e489da4aa717dd2d2510e5e0bd29b99c": "a4fa9680a03f33ffef95315b65d11b71",
".git/objects/7a/d15a7375b0cec3bbbff2e8956ceabceb70bfcb": "9c81f596b64cf231ac03902a07671a7e",
".git/objects/7b/b60d2278b9543685e922988a73796b216c5719": "09bc0f127da4cc4af8150e62d81b6863",
".git/objects/7c/2efd628f5922f6518a9f62c393751f00f395b2": "416161441b0fe0218980c0bb8cdfbfdc",
".git/objects/7c/694015b78a6a97063c600ae4c8866d2ba893a5": "2855834607b3da33bfa78ac80c912496",
".git/objects/7f/ae3b0d2b37030942b5a0847929bc4e5b950d0e": "547b93f48e0b7551becb0a7dcd33b661",
".git/objects/80/71645b511cad019c560cddf39425300428360b": "597c67c8b22716f30af94a95def98b78",
".git/objects/82/055b849c023871d3ad55d7334a22852e7ed0fc": "c733476a7107b66031f19f13e2fe71c6",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/c14e627fe477e0ab41615240c6ce1ba15375ca": "17475e5eaa578346dd3addce9d529864",
".git/objects/8c/520867a1f3e105eff8cb9275ceb20a3e73997a": "fc9e4ee56a011fa668f8a78cea2dff40",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/8f/f24a15b5bd387566dd42f730549ccd90f62b7e": "390c28c7ace1e0692363be1d12cdcc39",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/422e1b6b6fc43efa03344441e237cc7c097346": "07de1934eb3b01a301c017bac8c06e41",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/93/0b1b3b2ac5dfa676d3ad4e066da6cff806653b": "75fdff05f61b5edb8e7eb6d7fec9b8b8",
".git/objects/94/5cfd99513024a0c17b130d63eeb3b6478427d1": "5276d1a333050024c3b920d31cfc1794",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/f5397dd2d1f20b88fc68f0a60cf5389116688d": "141e0e494f57e7e9ebb8191e59379a43",
".git/objects/99/1135e68a35a7750d9d87f9583037bd35a1fe4f": "926db45b79222c04145e141e4aa8b12d",
".git/objects/9b/360b8152e7ba1d51d0d9ed4bab3181e233e9a6": "8a85a546cb5dc0d0d54f1fdbacf0e85e",
".git/objects/9c/b29c9d9dfb86bf318ef593eabbe01029ebbafc": "0fcd953a6949dcf933ff7cb8dfa386c8",
".git/objects/9e/5537c80166bc3728c8f1339bc75b289f13ea5a": "d7e74a3e8ef07587a230e678c6c92704",
".git/objects/a1/0881e247e2e4679946efd8b4b41b7b7f64e7b0": "c204d5d3a8a531dd7e1a8113cf4e31de",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a2/f79caf6632a78f8a74fb3312343daf99198e70": "fc893d367a41df9d8f62c192868ab99e",
".git/objects/a3/d1c1b92fb8e6fb1194dc5174ad44f6a9f38e93": "aa818f4204c89528dbbaeca9f0e439ba",
".git/objects/a4/5bebe239baf6aad5719951e8793244713a37c1": "dbd21209d15d23a43489929154a8fb36",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a7/689c1a17c3001f1d85a0303219d380a3bb043a": "4946991b43c8deafb08c8344df513f34",
".git/objects/ab/e716df39615e4ad3ca4a6f6acff098afc65d81": "340542f8583ea259c78ac29aefed1bd5",
".git/objects/ac/8720f533197964e7db5a330e0de2c145fb525b": "7a162a2f4e21e05637bea820b864f795",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/8928636a7d2fda14bbdf825b0effa1ca193595": "f1f45e5369157896a02bac121e076c80",
".git/objects/ae/d1b96ccc46aade6292be5bf099f3080f9a44e5": "0411a7f943e56763e9e1bcb624fe4a75",
".git/objects/af/97462698fe69a91a67463bcee222e28b1a34de": "74ea1fbd7aa27cbc07e19cb9ba5f5303",
".git/objects/b3/7d71039777105f610dc4c45c08c336c47deaa0": "8c663a566d99e8756da12a157fcc1f71",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b8/fb84deb9c14c7a10f3079312bd23c8ffc6efb5": "ff003fb615889e9300075f9783067c42",
".git/objects/bb/9f08e066a108d602c3b1188341edba637af15e": "326106e7fbe5c11d9160fee0320f23ef",
".git/objects/c0/dadda915a8bff26a72de77152ac3ecea53e91b": "403fdcfcc10ac10bb720b03678a1fec2",
".git/objects/c1/f38a2ad82732b3b52a4d07f03011646fafd16a": "2ddd1bf548f0d46d4be54dae7b82821e",
".git/objects/c4/728749cc4cd351d68c16071fcdf21f7b983c9b": "ec1dbea2bdde7a51628e4b59a1f6b078",
".git/objects/c6/b8949379f9e47fa1cb9f1cfd656b5dd017288f": "9ce5e10a8af28db68e86683956c4b966",
".git/objects/c7/3042245e5db5f70ff79ae4b77cab28d618b24c": "759f28e04b5938db2483e569bbd8dc92",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/c78d973dc564e1a852eaee868e8e636065ea89": "bbed75589576f9e11294fd6a5f57d9c5",
".git/objects/cb/aee3c0ccb90bc3efffa3a0ebe0a1f2ae3d5b93": "a67a99f93ea08da2a52911168cec46a9",
".git/objects/cc/615f0c78ece0a5f3b9826857d6204d1dfc1b28": "0af8a18a1811f81c5fff173e0857a885",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d8/c86aa78c7876f0111a19efd8d9b2dbf25a6107": "fa1a4dfcaa74a7700d6e062f239adc8b",
".git/objects/de/f09e478a1a18ca5f0bd9f1af816fb55e4d817f": "e0ab1fb9d030e2e1dd2feb75bf07733a",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ea/97ca65da308ff3dd0d64f3e446d5f836f71ebd": "12164b62ae011ca2c168d866bb090afb",
".git/objects/ec/1539fb8794215180eb85f267dc44c4e2beac37": "967a354bec5598ba8b71fa75caaf8eb3",
".git/objects/ed/dceb33383fe719e09bd5624b3a698b36acfb43": "094912ae24b414465adad1541c06d9ef",
".git/objects/ee/a10db64d5d82193b16254424d57f653d5a7f7b": "ed924b64041bb93d3aba5e064898ebdd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/a266dd37d5066da46c9a6b8898073ae2930a64": "90c22367f91de9fd622ad04f0a5fd7c8",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f7/248f839f0b393f38b59c915a696618868534a8": "a650b4d1344708271962d8f072d51f6c",
".git/objects/f8/c7ee8ace76188727584927b5a6be25e3eba6f0": "8a4ed4299f2274284fda912da9eec1e2",
".git/objects/f9/dc75e3b7499c04740bd269454c231e234e9018": "681fb60a85f7903be333e8aceb20d3f1",
".git/objects/fd/b9b24d49814494e2115862bc72aa191dd0897f": "c1ae50d481b4d07b9a07cd277c76d406",
".git/objects/fe/0e65088de5aa046c8202c0094f32a9e5e47845": "c0584a99f52a394484a6b6ad4bd33763",
".git/ORIG_HEAD": "454a2bb48d86d10ae0d7673c49c408f9",
".git/rebase-merge/author-script": "4aa275aadf173b6d76c5145d1bdcc67c",
".git/rebase-merge/done": "478275a9293951535e1fd9811345a162",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "26ab0db90d72e28ad0ba1e22ee510510",
".git/rebase-merge/git-rebase-todo": "8e24b5000655fe1b50354e1f0439fc65",
".git/rebase-merge/git-rebase-todo.backup": "1a4a8e5692e62fead50fc559ac890924",
".git/rebase-merge/head-name": "360efc618fa1294192e18ee097c9fae4",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "874fbcd2a63cd91881b23870a9857cc0",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/onto": "18ac0d2124ad07e7ad46859cc7139ad6",
".git/rebase-merge/orig-head": "454a2bb48d86d10ae0d7673c49c408f9",
".git/rebase-merge/patch": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "283890375fabd920222dcdf2e514d9b9",
".git/REBASE_HEAD": "283890375fabd920222dcdf2e514d9b9",
".git/refs/heads/main": "454a2bb48d86d10ae0d7673c49c408f9",
".git/refs/remotes/origin/main": "454a2bb48d86d10ae0d7673c49c408f9",
"assets/AssetManifest.bin": "d3560673c3d432d28bd8aded5c1b1800",
"assets/AssetManifest.bin.json": "471435cde8eb63b418be13072ce177a1",
"assets/AssetManifest.json": "fc9b4cf143c3c9ee9b786ffbae767378",
"assets/assets/addd.png": "7d48a7302e203a8ac2848558b8741f59",
"assets/assets/Animation%2520-%25201703758247454.json": "cd4f3e30bb220161061d9a40273008e9",
"assets/assets/background.png": "61861207ae6fb2db00e5e9f582076ef3",
"assets/assets/branches.svg": "bcb310fecb6d2a976a985bf301408a8a",
"assets/assets/chesse.jpg": "f486d539198eebee87834f6e37066816",
"assets/assets/images.png": "119c95355cd35a5a665e1ec8a9553a52",
"assets/assets/logo.png": "7d9cca5cf96a5027effbc03b09e7aa58",
"assets/assets/logo.svg": "e095887e8f329414bb6ea36af1a4b716",
"assets/assets/mybrand.svg": "9b11f1713d09e96700b07637b72ebbfd",
"assets/assets/otherproductimage.jpg": "740697736cd79b160009b0a8d6886713",
"assets/assets/privatetasting.jpg": "4ebf34e9e0d8bc6ece0e1db19896e8d1",
"assets/assets/product.png": "6a3c00c825866c78ec0a2e40a35b2eb9",
"assets/assets/products.svg": "2d9f3d54ef57e750a9476a6de124c943",
"assets/assets/telepatylogo.png": "472793fe7ae482e7cb7bdd322d31045b",
"assets/assets/tour1.jpg": "180a6e5b87e53bbf3f523b181b454815",
"assets/assets/Vector.png": "97cac202627cb417f5d445b70a4fb46c",
"assets/assets/winebackground.jpg": "6064ca3f973ca05e6f6ce4e8e372dd6f",
"assets/assets/winebackground.png": "a4467dd3126f62665e4e9f6b8132889a",
"assets/assets/winebackground2.png": "015a3853e2b82a01313e12bbad1ab22a",
"assets/FontManifest.json": "2c6bfd1cf261f035eda8ddf32778cdc2",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/NOTICES": "d3476e23ad3df42f9001601337464f9c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "736883c67993a654287642101badc91e",
"index.html": "9ed016ebbf34e1af87430f4c97e51587",
"/": "9ed016ebbf34e1af87430f4c97e51587",
"main.dart.js": "b9436495c88cf922b2503e1e4b71a709",
"version.json": "ca01ae5e6bad3ac937d9bf7e5c73e013"};
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
