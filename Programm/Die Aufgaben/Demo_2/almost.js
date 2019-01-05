function almost(){
    return nn.createNeuralNetwork(JSON.parse('{"actions":[{"d":{"r":1,"c":1},"input":"s0","output":"s2","bias":-0.053490794410301606,"v":[0.4524063270400224,0.5885010733144307,0.5241357697770266,-0.32352163560597824,-0.725471837664822,0.2965018394342345,0.935472581771367,0.568215803359232,-0.07601722251067693],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s3","bias":-0.4223183202047928,"v":[0.6791714987985891,0.8905013019411772,0.395203465070547,0.6222225030604915,0.956113581764668,0.18793689494534507,0.7532438199553746,0.23057825832530815,0.16428244207068946],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s4","bias":-0.31545456572485064,"v":[-0.138406479831676,0.011409698370865681,-0.18838881827076923,0.1736646022415714,0.41957219984658245,-0.9551532976972671,-0.7605203228508342,0.03713108728974468,-0.7652344470300002],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s5","bias":-0.31822822308543774,"v":[0.17218673729695147,0.3566585252824859,0.25244635359625534,-0.396404527147207,0.11383515268562212,0.19735412156520526,0.7196744481255737,0.42422109505465533,0.12101059569220483],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s6","bias":-0.6760390932757157,"v":[0.20453309296702799,0.36448332871198397,0.6790182886453922,0.4715262360976018,0.3487587908720798,0.327811099346454,0.5935186850882874,0.5447890798465957,0.6236878595040415],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s7","bias":-0.38290410569979494,"v":[0.262250919007475,-0.9443682945385867,-0.023455447429836764,-0.2451566563078464,0.14628201157137832,-0.4461232991866275,0.3804507346541327,-0.8655828476373205,-0.9748698035379597],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s8","bias":1.2364525721323831,"v":[0.8690739630101406,0.3062467530972269,-0.6368963571749665,-0.3221980736996201,-0.5619990021778919,0.19219446295629206,-0.178692379950791,0.47488177759401556,-0.5138211372398058],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s9","bias":-0.5561112832082284,"v":[0.3590805976181703,0.3416358432460558,0.29991253407841656,0.3711898943362522,-0.8006765294992996,0.48365133619011147,-0.25612279609460425,-0.34968269466271246,-0.20143965033607966],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s10","bias":0.48069572449450115,"v":[0.21508470594822307,0.3034874275284735,0.11832857626199221,0.6497960590257512,0.3022779699628802,0.29707207162484595,0.8314629386002237,0.9219298179932622,-0.3345984334598041],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s11","bias":-0.30801783562064994,"v":[0.9097992621817726,0.1929241317618795,0.47810165290224854,0.37729697078579594,-0.24374108488549356,0.9569099247964693,0.16071699235691264,0.015395959480163398,0.9937903092850182],"t":"Convolution"},{"f":"DeLU","input":"s2","output":"s12","t":"Activation"},{"f":"DeLU","input":"s3","output":"s13","t":"Activation"},{"f":"DeLU","input":"s4","output":"s14","t":"Activation"},{"f":"DeLU","input":"s5","output":"s15","t":"Activation"},{"f":"DeLU","input":"s6","output":"s16","t":"Activation"},{"f":"DeLU","input":"s7","output":"s17","t":"Activation"},{"f":"DeLU","input":"s8","output":"s18","t":"Activation"},{"f":"DeLU","input":"s9","output":"s19","t":"Activation"},{"f":"DeLU","input":"s10","output":"s20","t":"Activation"},{"f":"DeLU","input":"s11","output":"s21","t":"Activation"},{"d":{"r":1,"c":0},"input":"s12","output":"s22","bias":-0.8162901898003364,"v":[0.7934681972684636,-0.7567349223164068,-0.35231856699888325],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s13","output":"s22","bias":0.07016467793260506,"v":[-0.09804733361787717,0.19679683681805218,-0.8234960402582565],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s14","output":"s22","bias":-0.5579034778062347,"v":[0.4726149850702261,-0.6002261427745547,-0.5423023268749506],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s15","output":"s22","bias":-0.3431820266882132,"v":[-0.34623290934099527,0.6448587089166663,0.7048797634618017],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s16","output":"s22","bias":-0.525716956263128,"v":[0.052885814136204565,-0.835727998998648,0.3954261543250219],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s17","output":"s22","bias":0.6185395110956756,"v":[-0.3494530007569061,0.012018942269293205,-0.15385837891266504],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s18","output":"s22","bias":0.7304383261430586,"v":[-0.3834637723237014,-0.60475845822491,0.11837162926276015],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s19","output":"s22","bias":-0.05888616575240833,"v":[-0.6281314975998853,0.22333029480095368,-0.5561108794439408],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s20","output":"s22","bias":-0.9470528288621259,"v":[-0.4317635884227094,-0.9613290677896732,-0.20213958531132173],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s21","output":"s22","bias":0.5004429134672057,"v":[-0.9513457551399737,-0.49530842580334644,-0.6289035594803464],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s12","output":"s23","bias":-0.07913318464415249,"v":[-0.3203529455357319,-0.3839722326371421,-0.06659756079904428],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s13","output":"s23","bias":-1.0369595269962513,"v":[0.7475654614156078,-0.05428833236421276,0.1927735611118573],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s14","output":"s23","bias":-0.3028242134295072,"v":[0.034197603012722136,-0.8526547123132651,0.7221482439971173],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s15","output":"s23","bias":0.6737493666392798,"v":[0.9767524913326026,0.670617944775155,0.6480267385546102],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s16","output":"s23","bias":0.30865891071599244,"v":[-0.7318618700763214,0.26205304685859365,0.15025775874569303],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s17","output":"s23","bias":-1.0102349128907693,"v":[-0.10207614452082231,-0.7564072324321248,-0.5328656436466964],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s18","output":"s23","bias":0.3338752066087422,"v":[-0.6669374310179158,-0.4376859542642598,-0.12396794091255595],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s19","output":"s23","bias":0.6101970993855383,"v":[-0.04273303933487666,-0.710155412500485,-0.2694358563115478],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s20","output":"s23","bias":-0.7163736460398407,"v":[-0.5016019901234594,-0.8622460362070545,0.48780638345290345],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s21","output":"s23","bias":-0.3291874162263037,"v":[-0.03213759614281214,-0.884023534197956,0.46868091507792664],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s12","output":"s24","bias":-0.6453581870970231,"v":[-0.07033479975953465,-0.4410659286291344,0.3470049508614769],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s13","output":"s24","bias":-0.5988115669763476,"v":[0.09157631277922862,-0.7651067164295908,-0.8679125277107085],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s14","output":"s24","bias":0.6356213889516016,"v":[0.19322946202017888,-0.4752555565057539,0.5236526411317871],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s15","output":"s24","bias":-0.8773273455720951,"v":[0.7851182754641812,0.46845485305298407,0.23849881521887192],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s16","output":"s24","bias":0.2710963592117094,"v":[-0.5765423733063607,-1.0284202006115197,0.6161208146144073],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s17","output":"s24","bias":0.5431291493779513,"v":[0.01779182526172741,-0.4931794518667204,0.8481089577270277],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s18","output":"s24","bias":0.5444746910042575,"v":[0.7378299013955891,-0.8380783364777927,-0.6757989771453786],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s19","output":"s24","bias":-0.05652070437180472,"v":[-0.8775740577751803,-0.5653142456302094,-0.8993363592568033],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s20","output":"s24","bias":0.6101879668768353,"v":[-0.41721706718250273,0.1418595343105959,-0.5560650089063117],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s21","output":"s24","bias":-0.31981869586690415,"v":[-0.1317926237565228,0.13776441767572625,0.310287835286998],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s12","output":"s25","bias":-0.3713115166127894,"v":[0.1661604437565419,0.5157293379843273,0.3668314587232058],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s13","output":"s25","bias":-0.9951875070282619,"v":[0.18099928510468621,0.3100921564545037,-0.1832717393975764],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s14","output":"s25","bias":-0.05564360889863538,"v":[0.594090272163968,0.47084244765413247,0.6926328891223543],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s15","output":"s25","bias":0.5200412513654007,"v":[0.1164280346543794,0.7510406089771599,0.09265441750496893],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s16","output":"s25","bias":-0.7137800800824017,"v":[0.2507944619555648,0.10333376905400397,0.876169401627208],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s17","output":"s25","bias":-0.9513732283487675,"v":[-0.8711589991250851,0.7143715199252518,-1.0017190376761982],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s18","output":"s25","bias":0.47868578134450324,"v":[-0.6412424294819917,-0.9417553152317154,-0.6623375343005365],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s19","output":"s25","bias":-0.4794902594804409,"v":[-0.0235103061569135,-0.3127910403564221,0.9068845322845084],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s20","output":"s25","bias":0.5839546789043315,"v":[-0.7681248481401616,-0.8421477881364489,0.5522936341225042],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s21","output":"s25","bias":0.3176388367170553,"v":[0.6313902994120122,0.4040647854498543,1.3503563018716895],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s12","output":"s26","bias":-0.5330061426735694,"v":[0.2698745489740994,-0.10352958355307267,0.09116557620712838],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s13","output":"s26","bias":0.9867110517419831,"v":[-0.5973748687093589,-0.8815291071196963,-0.34256752234785276],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s14","output":"s26","bias":0.3010451180152389,"v":[-0.22415017249582614,0.48292854750688224,-0.4241143370680865],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s15","output":"s26","bias":1.122747096020326,"v":[-0.4854386330464439,-0.585187101779178,0.25885318832929566],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s16","output":"s26","bias":0.0077593096962891486,"v":[0.11680957943343519,-1.119483447404295,-0.0008597919258012674],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s17","output":"s26","bias":0.6604751390500035,"v":[0.8581134460086765,0.09159370641264385,0.25759623185673497],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s18","output":"s26","bias":0.4201903036624729,"v":[0.19070519387111634,0.12181216548421707,-0.008886316942823142],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s19","output":"s26","bias":0.952588559937169,"v":[-0.35591769414950936,0.378548908379168,0.4160616613887425],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s20","output":"s26","bias":-0.7208384805012705,"v":[0.4136284362541613,-0.31453955961103924,-0.3939918402516079],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s21","output":"s26","bias":0.8007511756746365,"v":[0.09066905617501686,-0.6747830325763593,-0.04749839023107229],"t":"Convolution"},{"f":"DeLU","input":"s22","output":"s27","t":"Activation"},{"f":"DeLU","input":"s23","output":"s28","t":"Activation"},{"f":"DeLU","input":"s24","output":"s29","t":"Activation"},{"f":"DeLU","input":"s25","output":"s30","t":"Activation"},{"f":"DeLU","input":"s26","output":"s31","t":"Activation"},{"d":{"r":1,"c":0},"input":"s27","output":"s32","bias":0.41909571356483605,"v":[0.1887503752600506,0.32615695094361363,0.4104217164452891],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s28","output":"s32","bias":0.42415691830070384,"v":[-0.30578612556964485,-0.4514586644302553,-0.4135704373720676],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s29","output":"s32","bias":0.2191821197680434,"v":[-0.06421540664092248,0.24377478223328522,0.1460169384723],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s30","output":"s32","bias":-0.32976500039576145,"v":[-0.6996085375650096,0.04828383073135438,0.029108402770969957],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s31","output":"s32","bias":0.666887867447653,"v":[0.017339825249781705,-0.6499208926613474,-0.037681320472890904],"t":"Convolution"},{"f":"DeLU","input":"s32","output":"s1","t":"Activation"}],"saves":[{"r":50,"c":50,"name":"s0"},{"r":50,"c":50,"name":"s1"},{"r":50,"c":50,"name":"s2"},{"r":50,"c":50,"name":"s3"},{"r":50,"c":50,"name":"s4"},{"r":50,"c":50,"name":"s5"},{"r":50,"c":50,"name":"s6"},{"r":50,"c":50,"name":"s7"},{"r":50,"c":50,"name":"s8"},{"r":50,"c":50,"name":"s9"},{"r":50,"c":50,"name":"s10"},{"r":50,"c":50,"name":"s11"},{"r":50,"c":50,"name":"s12"},{"r":50,"c":50,"name":"s13"},{"r":50,"c":50,"name":"s14"},{"r":50,"c":50,"name":"s15"},{"r":50,"c":50,"name":"s16"},{"r":50,"c":50,"name":"s17"},{"r":50,"c":50,"name":"s18"},{"r":50,"c":50,"name":"s19"},{"r":50,"c":50,"name":"s20"},{"r":50,"c":50,"name":"s21"},{"r":50,"c":50,"name":"s22"},{"r":50,"c":50,"name":"s23"},{"r":50,"c":50,"name":"s24"},{"r":50,"c":50,"name":"s25"},{"r":50,"c":50,"name":"s26"},{"r":50,"c":50,"name":"s27"},{"r":50,"c":50,"name":"s28"},{"r":50,"c":50,"name":"s29"},{"r":50,"c":50,"name":"s30"},{"r":50,"c":50,"name":"s31"},{"r":50,"c":50,"name":"s32"}],"input":"s0","output":"s1"}'));
}
function notalmost(){
    return nn.createNeuralNetwork(JSON.parse('{"actions":[{"d":{"r":1,"c":1},"input":"s0","output":"s2","bias":-0.4208925142166417,"v":[-0.2839863513326184,-0.20497219015435886,-0.273359445440695,-0.5089011546489327,-0.017299413902182197,-0.2752027816164763,0.03719010813366436,-1.025345346502069,-0.7392067310683662],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s3","bias":-0.00006381071226445339,"v":[-0.07710752835945504,-0.11860430181910221,-0.5941886927668016,0.2088093312974111,-0.7167912250520891,-0.09020104354490206,-0.27874748661693904,-0.8364960097635771,-0.9907535928299146],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s4","bias":-0.08551826295589478,"v":[0.08127440858572452,-0.05872098497087577,-0.05654637737122346,1.3786054368499128,0.0011664297262569774,-0.08597716356665638,-0.005201276364093755,-0.07251098719250645,-0.023316719621878684],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s5","bias":-0.5966908110187296,"v":[-0.2767808040200942,-0.10432553194709027,0.5966795178274137,0.11135338259130632,-0.4425297500741931,-0.49148472997759673,-0.13702760332085492,0.13690880993815105,-0.5769945718604347],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s6","bias":2.4162483417105216,"v":[-0.8065171113631048,-0.8036956541289213,-0.8069471715775066,-0.8039420564936173,-0.4250208840737642,-0.7966120841727945,-0.8067158532739469,-0.8035262713320244,-0.806723653879692],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s7","bias":-0.28506537817915756,"v":[0.13322271575864741,-0.7069866653543888,0.13766123578185127,-0.9505103447287017,0.15851863444432315,-0.0948083760740558,0.13430113036809763,0.0615923254487601,0.1274792506935588],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s8","bias":0.013819509859917865,"v":[0.012115449436548367,1.3679794580679139,0.013530644503452555,-0.05248509225032764,1.2595286430023227,-0.04052181573761305,-0.04052082828108161,1.2450607530692566,0.011477995470054281],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s9","bias":-0.7118474852357427,"v":[0.4254514211157231,-0.552846289509439,0.27604167735259544,-0.9606609237271029,-0.43660902147599284,-0.32765368790010924,-0.37387015199341045,-0.8855146751975006,-1.0492678840675496],"t":"Convolution"},{"f":"DeLU","input":"s2","output":"s10","t":"Activation"},{"f":"DeLU","input":"s3","output":"s11","t":"Activation"},{"f":"DeLU","input":"s4","output":"s12","t":"Activation"},{"f":"DeLU","input":"s5","output":"s13","t":"Activation"},{"f":"DeLU","input":"s6","output":"s14","t":"Activation"},{"f":"DeLU","input":"s7","output":"s15","t":"Activation"},{"f":"DeLU","input":"s8","output":"s16","t":"Activation"},{"f":"DeLU","input":"s9","output":"s17","t":"Activation"},{"d":{"r":1,"c":0},"input":"s10","output":"s18","bias":-0.021277531959041012,"v":[-0.044490779828947634,0.6572523672687548,-0.3488224909809716],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s11","output":"s18","bias":-0.08910944125694842,"v":[0.5198200140744362,-0.2983150749703092,-0.4874814364807313],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s12","output":"s18","bias":0.6115524226883272,"v":[-0.008875689711448198,0.17715787347811895,0.524507936559343],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s13","output":"s18","bias":0.3163256279961806,"v":[-0.07863069247247192,-0.3370063248295662,0.09054042891914908],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s14","output":"s18","bias":0.5792936752237415,"v":[0.019301034666686548,-2.5422641493374942,0.031057731767684553],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s15","output":"s18","bias":0.01929716112881148,"v":[-0.12977248312702588,0.8020149101437986,-0.4409876933522338],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s16","output":"s18","bias":1.0679804530944739,"v":[-0.8417469878965389,-0.681135590351987,-0.8474629609206725],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s17","output":"s18","bias":1.8063114465145738,"v":[0.4584580486914113,1.1056571354845601,0.3402276942764228],"t":"Convolution"},{"f":"DeLU","input":"s18","output":"s1","t":"Activation"}],"saves":[{"r":50,"c":50,"name":"s0"},{"r":50,"c":50,"name":"s1"},{"r":50,"c":50,"name":"s2"},{"r":50,"c":50,"name":"s3"},{"r":50,"c":50,"name":"s4"},{"r":50,"c":50,"name":"s5"},{"r":50,"c":50,"name":"s6"},{"r":50,"c":50,"name":"s7"},{"r":50,"c":50,"name":"s8"},{"r":50,"c":50,"name":"s9"},{"r":50,"c":50,"name":"s10"},{"r":50,"c":50,"name":"s11"},{"r":50,"c":50,"name":"s12"},{"r":50,"c":50,"name":"s13"},{"r":50,"c":50,"name":"s14"},{"r":50,"c":50,"name":"s15"},{"r":50,"c":50,"name":"s16"},{"r":50,"c":50,"name":"s17"},{"r":50,"c":50,"name":"s18"}],"input":"s0","output":"s1"}'));
}
function notalmost2(){
    return nn.createNeuralNetwork(JSON.parse('{"actions":[{"d":{"r":1,"c":1},"input":"s0","output":"s2","bias":0.015285297073943473,"v":[0.15701028769898126,0.44970873233347725,-0.01629288264177228,-0.08535964296819724,0.004618546415624371,0.19546143669558882,0.11705579865001722,0.4288731193671805,-0.014709765795705093],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s3","bias":-0.362048887323758,"v":[-0.0687393205541802,-0.1424225942487107,-0.06582936874277029,0.11770181115115964,-0.20663878746311518,0.11084463524945455,0.03699768570839155,-0.06786390701821053,0.20027080834693883],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s4","bias":-0.3715720709632452,"v":[-0.29041752229517487,-0.4367664311131733,-0.28089077674806673,-0.3915430410578225,-0.012483343420786469,-0.29823877094700185,-0.3833103744527436,-0.4270305473309666,-0.21694124523749603],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s5","bias":-0.8432143321485476,"v":[0.25106792553923507,-0.16097498419327813,0.22332577985722762,0.24658641953749988,0.010229548811054855,0.276287918316466,0.2438966978572617,0.2557898364447215,0.24320146775277843],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s6","bias":-0.000691870310035033,"v":[0.03897726945085783,1.0914909480730792,0.03573047882823216,-0.09258294430885286,1.0572866811549628,-0.09510879384787971,0.03188781140570871,1.0940757964071615,0.03350647123817309],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s7","bias":-0.8118978673670926,"v":[-0.03955600295629763,-0.2598517094639592,-0.1858209462361184,-0.20920296686286957,0.12578141043270333,-0.2613603050134124,-0.14108071401706643,-0.12531459438375647,-0.2054786755270468],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s8","bias":1.876592318154709,"v":[-0.6340718854876157,-0.635720055518319,-0.6338865095083117,-0.634557336866916,-0.30301441593136735,-0.6334773794591855,-0.6338450740783155,-0.6339159850245186,-0.6337553455484792],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s9","bias":-0.6023866424377738,"v":[-0.2262132831632189,0.043936866888243976,0.09406282094163325,0.22993124850649163,-0.282699472908936,0.21706204648385885,0.03508691212060883,-0.08783878912742037,-0.10566324925188637],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s10","bias":1.3391815849093063,"v":[-0.45039861553408844,-0.45256469213496014,-0.451493433319423,-0.4516251760941389,-0.27876242179895544,-0.45058470510790616,-0.45070474597682625,-0.4513672993049085,-0.45111774391622006],"t":"Convolution"},{"d":{"r":1,"c":1},"input":"s0","output":"s11","bias":-0.05477036921591508,"v":[-0.09288092071921128,-0.07623770155840112,-0.12540560299141057,-0.0704030080087412,-0.03701941107781775,-0.12313087979281558,-0.09792743418567167,-0.07245269463471499,-0.1402074572052171],"t":"Convolution"},{"f":"DeLU","input":"s2","output":"s12","t":"Activation"},{"f":"DeLU","input":"s3","output":"s13","t":"Activation"},{"f":"DeLU","input":"s4","output":"s14","t":"Activation"},{"f":"DeLU","input":"s5","output":"s15","t":"Activation"},{"f":"DeLU","input":"s6","output":"s16","t":"Activation"},{"f":"DeLU","input":"s7","output":"s17","t":"Activation"},{"f":"DeLU","input":"s8","output":"s18","t":"Activation"},{"f":"DeLU","input":"s9","output":"s19","t":"Activation"},{"f":"DeLU","input":"s10","output":"s20","t":"Activation"},{"f":"DeLU","input":"s11","output":"s21","t":"Activation"},{"d":{"r":1,"c":0},"input":"s12","output":"s22","bias":0.9068151527541113,"v":[0.6774714950853313,-0.9731419248233726,-0.5058217056461114],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s13","output":"s22","bias":0.34435207617538055,"v":[-0.11316643430642746,0.14221957299434337,0.4791660869145684],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s14","output":"s22","bias":0.6061971595365554,"v":[-0.06945130396594751,0.5826516490961045,0.0016407861091467385],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s15","output":"s22","bias":0.7590086203930457,"v":[-0.03168410336246594,-1.3589999617782569,0.026134753911530043],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s16","output":"s22","bias":-0.5430667446181967,"v":[-1.0179085078936565,-0.36979712303829754,-0.7159556535361083],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s17","output":"s22","bias":0.9223172244578066,"v":[0.594869637347688,0.9278859453550965,-0.6967504000350789],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s18","output":"s22","bias":-0.7840946297066034,"v":[0.2897893412858386,-2.083719687108339,-0.3257859236042031],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s19","output":"s22","bias":0.5540808887034223,"v":[0.9375166170119892,-0.2606897875860049,0.6257538409627207],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s20","output":"s22","bias":1.0713317351809784,"v":[-0.27560388558002896,-1.5766090206383878,0.515437747657985],"t":"Convolution"},{"d":{"r":1,"c":0},"input":"s21","output":"s22","bias":0.27725568861848426,"v":[-0.10439576032335961,0.1707326464535888,-0.7561599442951068],"t":"Convolution"},{"f":"DeLU","input":"s22","output":"s1","t":"Activation"}],"saves":[{"r":50,"c":50,"name":"s0"},{"r":50,"c":50,"name":"s1"},{"r":50,"c":50,"name":"s2"},{"r":50,"c":50,"name":"s3"},{"r":50,"c":50,"name":"s4"},{"r":50,"c":50,"name":"s5"},{"r":50,"c":50,"name":"s6"},{"r":50,"c":50,"name":"s7"},{"r":50,"c":50,"name":"s8"},{"r":50,"c":50,"name":"s9"},{"r":50,"c":50,"name":"s10"},{"r":50,"c":50,"name":"s11"},{"r":50,"c":50,"name":"s12"},{"r":50,"c":50,"name":"s13"},{"r":50,"c":50,"name":"s14"},{"r":50,"c":50,"name":"s15"},{"r":50,"c":50,"name":"s16"},{"r":50,"c":50,"name":"s17"},{"r":50,"c":50,"name":"s18"},{"r":50,"c":50,"name":"s19"},{"r":50,"c":50,"name":"s20"},{"r":50,"c":50,"name":"s21"},{"r":50,"c":50,"name":"s22"}],"input":"s0","output":"s1"}'));
}