const buttons = document.querySelectorAll('.power-button');
const result = document.getElementById('result');
let temps = [0, 0, 0, 0, 0, 0];

function showText() {
	const number = parseInt(document.getElementById('numberInput').value);
	if (number>=0&&number<=6) {
		switch (number){
				 case 0:
				    var qq="●六个爻都不变（静爻）：解卦要根据本卦的卦辞来推断。";
					break;
		         case 1:
		             var qq="●卦中只有一个变爻：解卦要根据本卦变爻的爻辞来推断。";
					 break;
		         case 2:
		            var qq="●卦中有两个变爻：解卦时根据本卦的两个爻辞来推断，以上爻为主，下爻为辅。";
		            break;
		         case 3:
		            var qq="●卦有三个变爻：解卦时根据本卦的爻辞和变卦的爻辞综合分析，但主要还是以本卦爻辞为主，变卦爻辞为辅。\n\n●如经过就算得出艮为山，变爻是二、三、四爻。变卦是火水未济。一是以艮卦爻辞为主，二是以变卦未济卦辞为辅，综合考虑在断出。";
		            break;
				case 4:
				    var qq="●卦有四个变爻：解卦不看主卦，看变卦的两个不变的爻辞解卦，以下爻的爻辞为主。\n\n●如起卦为泽风大过卦，变爻为二、三、四、六爻，变卦为风地观。此时以初六爻辞为依据，互相参照做对比，就可以准确地判断事物的发展方向。";
					break;
				case 5:
				   var qq="●卦有五个变爻：看变卦的那个不变的爻辞解卦。\n\n●如起卦为火天大有，五个变爻，只有六五不变。变卦为坤为地卦，就以坤卦不变的六五爻辞为依据。";
				   break;
				case 6:
				   var qq="●卦中的六个爻全变：如果是乾坤两个卦就以用九和用六断卦；如果是其它的卦，就用变卦的爻辞解卦。\n\n●如起卦是山天大蓄卦，六爻全变得到变卦泽地萃，所以就用萃卦卦辞为依据进行解卦。";
				   break;
		}
		document.getElementById('output').innerText = qq;
	}
	else if(number<0){
		document.getElementById('output').innerText = "●为什么会有负数啊？？？";
	}
	else {
		document.getElementById('output').innerText = "●总共六爻，其它爻是《易经》给你的？";
	}
}


buttons.forEach((button, index) => {
    let power = false;

    button.addEventListener('click', () => {
        if (power) {
            temps[index] = 0;
            button.innerHTML = `<img src="yang.png">`;
        } else {
            temps[index] = Math.pow(2, 5-index);
            button.innerHTML = `<img src="yin.png">`;
        }

        power = !power;
		
        let sum = temps.reduce((acc, curr) => acc + curr);
		switch (sum+1) {
		         case 1:
		             var qq="●乾卦●： qián\n●乾为天卦。 困龙得水。\n● 【乾】者，健也。刚健不曲中正，困龙得水，困渊中不得舒展，忽然天降大雨，得雷鸣而起，任意飞腾，时来运转之兆。 曰：无不欢乐，上人见喜，祸不成凶，诸事顺利。 断：刚健中正，久处逆境，马上有用，吉事上升。";
		             var qq1="乾卦 乾为天 乾上乾下\n\n  上九：亢龙有悔 。\n│ 《 象》日：亢龙有悔，盈不可久也。\n九五：飞龙在天，利见大人 。\n│ 《 象》曰：飞龙在天，大人造也。\n九四：或跃在渊，无咎 。\n│ 《 象》曰：或跃在渊，进无咎也。\n九三：君子终日乾乾，夕惕若厉，无咎 。\n│ 《 象》曰：终日乾乾，反复道也。\n九二：见龙在田，利见大人 。\n│ 《 象》日：见龙在田，德施普也。\n初九：潜龙勿用 。\n│ 《 象》曰：潜龙勿用，阳在下也。\n用九：见群龙无首，吉 。\n│ 《 象》曰：用九，天德不可为首也。\n";
		             break;
		         case 2:
		             var qq="●姤卦●： gòu\n●天风姤卦。 他乡遇友。\n● 【姤】者，遇也，不期而遇，行人久困在外，举目无亲，偶然遇友相亲相爱，甚是得意，时来运转，困穷他乡志不伸，忧愁寂寞到如今，时来喜逢遇知音，面对相谈大放心。 曰：他乡遇友喜气欢，须知运气福禄添，自今开始顺利运，往后凶厄不相干。 断：交易有成，官事有理，走失可寻，出门见喜。";
					 var qq1="姤卦 天风姤 乾上巽下\n\n  上九：姤其角，吝，无咎 。\n│ 《 象》曰：姤其角，上穷吝也。\n九五：以杞包瓜，含章，有陨自天 。\n│ 《 象》曰：九五含章，中正也。有陨自天，志不舍命 也。\n九四：包无鱼，起凶 。\n│ 《 象》曰：无鱼之凶，远民也。\n九三：臀无肤，其行次且，厉，无大咎 。\n│ 《 象》曰：其行次且，行未牵也。\n九二：包有鱼，无咎，不利宾 。\n│ 《 象》曰：包有鱼，义不及宾也。\n初六：系于金柅，贞吉。有攸往，见凶， 羸豕踟躅 。\n│ 《 象》曰：系于金柅，柔道牵也。\n";
		             break;
		         case 3:
		             var qq="●同人卦●： tóng rén\n●天火同人卦。 仙人指路。\n● 【同人】者，与人同也，同心同德，故有仙人指路之象。 象：心中有事不开怀，一切事情犯疑猜，幸遇明人来指路，诸般忧愁自消裁。 断：仙人指路大运通，劝君任意走西东，交易求财不费力，婚姻合伙有响应。婚姻有成，行人归家，走失可见，做事无差。";
		             var qq1="同人卦 天火同人 乾上离下\n\n  上九：同人于郊，无悔 。\n│ 《 象》曰：同人于郊，志未得也。\n九五：同人，先号咷而后笑。大师克相遇 。\n│ 《 象》曰：同人之先，以中直也。大师相遇，言相克也。\n九四：乘其墉，弗克攻，吉 。\n│ 《 象》曰：乘其墉，义弗克也，其吉，则困而反则也。\n九三：伏戎于莽，升其高陵，三岁不兴 。\n│ 《 象》曰：伏戎于莽，敌刚也。三岁不兴，安行 也。\n六二：同人于宗，吝 。\n│ 《 象》曰：同人于宗，吝道也。\n初九：同人于门，无咎 。\n│ 《 象》曰：出门同人，又 谁咎也。\n";
		             break;
		         case 4:
		             var qq="●遁卦●： dùn\n●天山遁卦。 浓云蔽日。\n● 【遁】者，避也。退避不出，有浓云蔽日之象，失势云蔽日，如同太阳中午时节，天下照，忽然来了一块浓云遮蔽了光，诸事不遂。 曰：浓云遮日不见明，劝君且莫出远行，婚姻求财皆不顺，提防是非到门前。 断：月令不善，走失难见，交易合伙，诸事平淡。";
		             var qq1="遁卦 天山遁 乾上艮下\n\n  上九：肥遁，无不利 。\n│ 《 象》曰：肥遁，无不利，无所疑也。\n九五：嘉遁，贞吉 。\n│ 《 象》曰：嘉遁贞吉，以正志也。\n九四：好遁。君子吉，小人否 。\n│ 《 象》曰：君子好遁，小人否也。\n九三：系遁，有疾厉，畜臣妾，吉 。\n│ 《 象》曰：系遁之厉，有疾惫也。畜臣妾吉，不可大事也。\n六二：执之用黄牛之革，莫之胜说 。\n│ 《 象》曰：执用黄牛，固志也。\n初六：遁尾，厉。勿用有攸往 。\n│ 《 象》曰：遁尾之厉，不往何灾也。\n";
		             break;
		         case 5:
		             var qq="●履卦●： lǚ\n●天泽履卦。 凤鸣岐山。\n● 【履】者，蹑也，有所蹑而未进也，故有凤鸣岐山之象。 象：凤凰落在西岐山，鸣了三声出圣贤，天降文王开基业，富贵荣华八百年。 断：凤落岐山闯四方，占之逢之大吉昌，走失行人有音信，生意合伙入时多。出行有益，求财必准，疾病皆除，谋事平稳。";
		             var qq1="履卦 天泽履 乾上兑下\n\n  上九：视履考祥，其旋元吉 。\n│ 《 象》曰：元吉在上，大有庆也。\n九五：夬履，贞厉 。\n│ 《 象》曰：夬履贞厉，位正当也。\n九四：履虎尾，愬愬，终吉 。\n│ 《 象》曰：愬愬终吉，志行也。\n六三：眇能视，跛能履。履虎尾，咥人，凶。武人为于大君 。\n│ 《 象》曰：眇能视，不足以 有明也。跛能履，不足以与行也。咥人之凶，位不当也。武人为于大君，志刚也。\n九二：履道坦坦，幽人贞吉 。\n│ 《 象》曰：幽人贞吉，中不自乱也。\n初九：素履往，无咎 。\n│ 《 象》曰：素履之往，独行愿也。\n";
		             break;
				case 6:
				    var qq="●讼卦●： sòng\n●天水讼卦。 二人争路。\n● 【讼】者，辩也，事有争取，故有二人争路之象。 象：心中有事实难做，好象两人来争路，目下局势都争先，谁肯让谁走一步。 断：两人争路未肯降，占之逢之费主张，交易出行有阻碍，生意合伙也平常。目下不吉，休争闲气，好事难成，求财费力。";
				    var qq1="讼卦 天水讼 乾上坎下\n\n  上九：或锡之鞶带，终朝三褫之 。\n│ 《 象》曰：以讼受福，亦不足敬也。\n九五：讼，元吉 。\n│ 《 象》曰：讼，元吉，以中正也。\n九四：不克讼，复自命，渝安贞，吉 。\n│ 《 象》曰：复即命，渝安贞；不失也。\n六三：食旧德，贞厉，终吉。或从王事，无成 。\n│ 《 象》曰：食旧德，从上吉也。\n九二：不克讼，归而逋，其邑人三百户无眚 。\n│ 《 象》曰：不克讼，归逋窜也。自下讼上， 患至掇也。\n初六：不永所事，小有言，终吉 。\n│ 《 象》曰：不永所事，讼不可长也。虽有小言，其辩明也。\n";
		             break;
				case 7:
				    var qq="●无妄卦●： wú wàng\n●无雷无妄卦。 鸟囚牢笼。\n● 【无妄】者，无所期望也。故有鸟囚牢笼之象。 象：飞鸟失机落笼中，纵然想飞不能行。目下只宜守本份，妄想扒高万不能。 断：鸟被牢笼难出头，占者逢之失自由，谋望求财难定准，疾病口舌怨忧愁。出门不遇，合伙无利，婚姻走失，疾病不愈。";
				    var qq1="无妄卦 天雷无妄 乾上震下\n\n  上九：无妄，行有眚，无攸利 。\n│ 《 象》曰：无妄之行，穷之灾也。\n九五：无妄之疾，勿药有喜 。\n│ 《 象》曰：无妄之药，不可试也。\n九四：可贞，无咎 。\n│ 《 象》曰：象曰：可贞无咎，固有之也。\n六三：无妄之灾。或系之牛，行人之得，邑人之灾 。\n│ 《 象》曰：行人得牛，邑人灾也。\n六二：不耕获，不菑畲，则利有攸往 。\n│ 《 象》曰：不耕获，未富也。\n初九：无妄，往吉 。\n│ 《 象》曰：无妄之往，得志也。\n";
		             break;
				case 8:
				    var qq="●否卦●： pǐ\n●天地否卦。 虎落深坑\n● 【否】者，塞也。闭塞不通。如猛虎落深坑，有一只老虎下山寻食，不料被人掘下一深坑，虎下去了，总有威风不能伸展，凶多吉少。 曰：猎人掘下一深坑，一只老虎要入坑，若不提防掉下去，保管你凶多吉少。 断：走失难寻，交易不定，婚姻不美，不可轻动。";
				    var qq1="否卦 天地否 乾上坤下\n\n  上九：倾否，先否后喜 。\n│ 《 象》曰：否终则倾，何可长也。\n九五：休否，大人吉。其亡其亡，系于苞桑 。\n│ 《 象》曰：大人之吉，位正当也。\n九四：有命无咎，畴离祉 。\n│ 《 象》曰：有命无咎，志行也。\n六三：包羞 。\n│ 《 象》曰：包羞，位不当也。\n六二：包承，小人吉，大人否，亨 。\n│ 《 象》曰：大人否，亨，不乱群也。\n初六：拔茅茹，以其汇，贞吉，亨 。\n│ 《 象》曰：拔茅贞吉，志在君也。\n";
		             break;
				case 9:
				    var qq="●小畜卦●： xiǎo xù\n●风天小畜卦。 密云不雨。\n● 【小畜】者，以以阴畜阳也，有气无质，故有密云不雨之象。 象：苗逢旱天尽焦稍，谁想云浓雨不浇。农民仰天长叹气，事从虚来莫心高。 断：浓云密排下雨难，盼望行人不见还，交易出行空费力，婚姻求财是枉然。月令中平，暂且从容，疾病口舌，交节安宁。";
				    var qq1="小畜卦 风天小畜 巽上乾下\n\n  上九：既雨既处，尚德载。妇贞厉。月几望，君子征凶 。\n│ 《 象》曰：既雨既处，德积载也。 君子征凶，有所疑也。\n九五：有孚挛如，富以其邻 。\n│ 《 象》曰：有孚挛如，不独富也。\n六四：有孚，血去惕出，无咎 。\n│ 《 象》曰：有孚惕出，上合志也。\n九三：舆说辐，夫妻反目 。\n│ 《 象》曰：夫 妻反目，不能正室也。\n九二：牵复，吉 。\n│ 《 象》曰：牵复在中，亦不自失也。\n初九：复自道，何其咎？吉 。\n│ 《 象》曰：复自道， 其义吉也。\n";
		             break;
				case 10:
				    var qq="●巽卦●： xùn\n●巽为风卦。 孤舟得水。 \n●【巽】者，顺也，巽顺而入，故有孤舟得水之象。 象：一只孤舟落沙滩，有船无水时运难，时逢大雨江河满，不用费力任往返。 断：孤舟得水出沙滩，出外行人把家还，是非口舌皆无碍，婚姻合伙多周全。功名称意，求财得利，交易可成，疾病痊愈。";
				    var qq1="巽卦 巽为风 巽上巽下\n\n  上九：巽在床下，丧其资斧，贞凶 。\n│ 《 象》曰：巽在床下，上穷也。丧其资斧，正乎凶也。\n九五：贞吉，悔亡，无不利。无初有终。先庚三日，后庚三日，吉 。\n│ 《 象》曰：九五之吉，位 正中也。\n六四：悔亡，田获三品 。\n│ 《 象》曰：田获三品，有功也。\n九三：频巽，吝 。\n│ 《 象》曰：频巽之吝，志穷也。\n九二：巽在床下，用史巫纷若，吉，无咎 。\n│ 《 象》曰：纷若之吉，得中也。\n初六：进退，利武人之贞 。\n│ 《 象》曰：进退，志疑也。 利武人之贞，志治也。\n";
		             break;
				case 11:
				    var qq="●家人卦●： jiā\n●风火家人卦。 镜里观花。\n● 【家人】者，一家之人也。内外各失其真，故有镜里观花之象。 象：一朵鲜花镜中开，看似极好取不来，劝君不可镜花爱，凡事不可巧安排。 断：镜里观花休认真，谋望求财不遂心，交易慢成婚姻合，走失行人无信音。出行不好，疾病未愈，求名无难，谋事不宜。";
				    var qq1="家人卦 风火家人 巽上离下\n\n  上九：有孚威如，终吉 。\n│ 《 象》曰：威如之吉，反身之谓也。\n九五：王假有家，勿恤，吉 。\n│ 《 象》曰：王假有家，交相爱也。\n六四：富家，大吉 。\n│ 《 象》曰：富家大吉，顺在位也。\n九三：家人嗃嗃，悔厉吉；妇子嘻嘻，终吝 。\n│ 《 象》曰：家人嗃嗃，未失也。妇子嘻嘻，失家节也。\n六二：无攸遂，在中馈。贞吉│ 《 象》曰：六二之吉，顺以巽也。\n初九：闲有家，悔亡 。\n│ 《 象》曰：闲有家，志未变也。\n";
		             break;
				case 12:
				    var qq="●渐卦●： jiàn\n●风山渐卦。 行走薄冰。\n● 【渐】者，进也。故有行走薄冰之象。如同一人过河无桥，冰上行走，不想走到中间，其冰甚薄，心中着实惊恐，占此卦，凡事当缓，做事不可急迫之兆。 象：路上行人在隆冬，过河无桥走薄冰，小心谨慎过得去，一步错了落水中。 断：行人走冰怕冰薄，交易出行要琢磨，婚姻合伙休大意，官司口舌需要和。薄冰甚是险，行人却男尽，君子占此卦，凡事要小心。";
				    var qq1="渐卦 风山渐 巽上艮下\n\n  上九：鸿渐于逵，其羽可用为仪，吉 。\n│ 《 象》曰：其羽可用为仪吉，不可乱也。\n九五：鸿渐于陵，妇三岁不孕，终莫之胜，吉 。\n│ 《 象》曰：终莫之胜，吉，得所愿也。\n六四：鸿渐于木，或得其桷，无咎 。\n│ 《 象》曰：或得其桷，顺以巽也。\n九三：鸿渐于陆。夫征不复，妇孕不育，凶。利御寇 。\n│ 《 象》曰：夫征不复，离群丑也。妇孕不育，失其道也。利用御寇，顺相保也。\n六二：鸿渐于磐，饮食衍衍，吉 。\n│ 《 象》曰：饮食衍衍，不素饱也。\n初六：鸿渐于干，小子厉，有言，无咎 。\n│ 《 象》曰：小子之厉，义无咎也。\n";
		             break;
				case 13:
				    var qq="●中孚卦●： zhōng fú\n●风泽中孚卦。 俊鸟出笼。\n● 【孚】者，信也，信而中正应呼天，故有俊鸟出笼之象。 象：俊鸟幸得出笼中，脱了灾难显威风，直上青云福立至，东南西北任意行。 断：俊鸟乘机出笼中，月光灾难大逃通，寻人费力逃难好，官司疾病皆无凶，合伙如意，迁移如心，买卖兴旺，求财得意。";
				    var qq1="中孚卦 风泽中孚 巽上兑下\n\n  上九：翰音登于天，贞凶 。\n│ 《 象》曰：翰音登于天，何可长也。\n九五：有孚挛如，无咎 。\n│ 《 象》曰：有孚挛如，位正当也。\n六四：月几望，马匹亡，无咎 。\n│ 《 象》曰：马匹亡，绝类上也。\n六三：得敌，或鼓或罢，或泣或歌 。\n│ 《 象》曰：可鼓或罢，位不当也。\n九二：鸣鹤在阴，其子和之。我有好爵，吾与尔靡之 。\n│ 《 象》曰：其子和之，中心愿也。\n初九：虞吉，有它不燕 。\n│ 《 象》曰：初九虞吉， 志未变也。\n";
		             break;
				case 14:
				    var qq="●涣卦●： huàn\n●风水涣卦。 隔河望金。\n● 【涣】者，散也，散而不聚。故有隔河望金之象。 象：隔河望见一锭金，欲取河宽水又深，指望资财难到手，昼夜思想枉费心。 断：财帛隔着一条河，岸宽水深摸不着，过月才能广吉应，目下不必来琢磨。婚姻不吉，合伙不利，交易出行，总不如意。";
				    var qq1="涣卦 风水涣 巽上坎下\n\n  上九：涣其血，去逖出，无咎 。\n│ 《 象》曰：涣其血，远害也。\n九五：涣汗，其大号涣，王居，无咎 。\n│ 《 象》曰：王居无咎，正位也。\n六四：涣其群，元吉。涣有丘，匪夷所思 。\n│ 《 象》曰：涣其群，元吉，光大也。\n六三：涣其躬，无悔 。\n│ 《 象》曰：涣其躬，志在外也。\n九二：涣奔其机，悔亡 。\n│ 《 象》曰：涣奔其机，得愿也。\n初六：用拯马壮，吉 。\n│ 《 象》曰：初六之吉，顺 也。\n";
		             break;
				case 15:
				    var qq="●益卦●： yì\n●风雷益卦。 枯木开花。\n● 【益】者，增益也，有益无损，故有枯木开花之象。 象：时来运转吉气发，多年枯木又开花，枝叶重发多茂盛，几人见了几人夸。 断：枯木开花渐渐荣，主人事业大兴隆，婚姻求财大吉庆，口舌疾病得安宁。交易有成，见官得理，走失可寻，出门见喜。";
				    var qq1="益卦 风雷益 巽上震下\n\n  上九：莫益之，或击之，立心勿恒，凶 。\n│ 《 象》曰：莫益之，偏辞也。或击之，自外来也。\n九五：有孚惠心，勿问元吉。有孚惠我德 。\n│ 《 象》曰：有孚惠心，勿问之矣。惠我德，大得志也。\n六四：中行，告公从，利用为依迁国 。\n│ 《 象》曰：告公从，以益志也。\n六三：益之用凶事，无咎。有孚中行，告公用圭 。\n│ 《 象》曰：益用凶事，固有之也。\n六二：或益之十朋之龟，弗克违。永贞吉。王用享于帝，吉 。\n│ 《 象》曰：或益之，自外来 也。\n初九：利用为大作，元吉，无咎 。\n│ 《 象》曰：元吉无咎，下不厚事也。\n";
		             break;
				case 16:
				    var qq="●观卦●： guān\n●风地观卦。 旱荷得水。\n● 【观】者，为人所仰也，故有旱荷得水之象。一池荷花，正当天旱的时候，池干花枯，全不茂盛，忽然天降大雨，花又茂盛，占此卦者，得贵人扶助之兆。 象：事业荷花出水中，旱日不如往日同，幸得逢水来相灌，枝叶重鲜花更红。 断：此卦有水来浇荷，生意买卖利息多，婚姻自有人来助，出门永不受折磨。走失得见口舌散，疾病皆除人人善。";
				    var qq1="观卦 风地观 巽上坤下\n\n  上九：观其生，君子无咎 。\n│ 《 象》曰：观其生，志未平也。\n九五：观我生，君子无咎 。\n│ 《 象》曰：观我生，观民也。\n六四：观国之光，利用宾于王 。\n│ 《 象》曰：观国之光，尚宾也。\n六三：观我生，进退 。\n│ 《 象》曰：观我生进退，未失道也。\n六二：窥观，利女贞 。\n│ 《 象》曰：窥观女贞，亦可丑也。\n初六：童观，小人无咎，君子吝 。\n│ 《 象》曰：初六童观，小人道也。\n";
		             break;
				case 17:
				    var qq="●大有卦●： dà yōu\n●火天大有卦。 砍树摸雀。\n● 【大有】者，所有大也。故有砍树摸雀之兆，乃是一人偶见树上有一窝雀鸟，有心上去摸之，恐其晃悠，遂将此树砍倒，稳拿的。占此卦者，做事稳当之兆。 象：此卦占之好处多，砍倒大树摸老雀，稳稳当当拿到手，别人空看摸不着。 断：砍树摸雀做事牢，是非口舌自然消，婚姻合伙不费力，若问走失未逃脱，恍忽事不做，拿稳才下手，任你求各利，到处自然有。";
				    var qq1="大有卦 火天大有 离上乾下\n\n  上九：自天佑之，吉无不利 。\n│ 《 象》曰：大有上吉，自天佑也。\n六五：厥孚交如，威如，吉 。\n│ 《 象》曰：厥孚交如，信以发志也。威如之吉，易而无备也。\n九四：匪其彭，无咎 。\n│ 《 象》曰：匪其彭，无咎，明辨晰也。\n九三：公用亨于天子，小人弗克 。\n│ 《 象》曰：公用亨于天子，小人害也。\n九二：大车以载，有攸往，无咎 。\n│ 《 象》曰：大车以载，积中不败也。\n初九：无交害，匪咎，艰则无咎 。\n│ 《 象》曰：大有初九，无交害也。\n";
		             break;
				case 18:
				    var qq="●鼎卦●： dǐng\n●火风鼎卦。 渔人得利。\n● 【鼎】者，烹饪之物，烹以养贤，故有渔人得利之象。 象：莺弄蛤蜊落沙滩，蛤蜊弄莺两翅扇，鱼翁进前双利，走失行人即日还。 断：鱼翁得利喜自然，谋望求财两周全，婚姻合伙双得利，卦者适值喜气添。出门有利，交易可成，官司无妨，生意兴隆。";
				    var qq1="鼎卦 火风鼎 离上巽下\n\n  上九：鼎玉铉，大吉，无不利 。\n│ 《 象》曰：玉铉在上，刚柔节也。\n六五：鼎黄耳金铉，利贞 。\n│ 《 象》曰：鼎黄耳，中以为实也。\n九四：鼎折足，覆公餗，其形渥，凶 。\n│ 《 象》曰：覆公餗，信如何也？\n九三：鼎耳革，其行塞，雉膏不食。方雨，亏悔，终吉 。\n│ 《 象》曰：鼎耳革，失其义也。\n九二：鼎有实，我仇有疾，不我能即，吉 。\n│ 《 象》曰：鼎有实，慎所之也。我仇有疾，终无尤也。\n初六：鼎颠趾，利出否。得妾以其子，无咎 。\n│ 《 象》曰：鼎颠趾，未悖也。利出否，以从贵也。\n";
		             break;
				case 19:
				    var qq="●离卦●： lí\n●离为火卦。 天官赐福。\n● 【离】者，光明也，阴丽乎阳，故有天官赐福之象。 象：官长来占主高升，庄农人家富禄增，生意买卖利也厚，匠人艺人大运通。 断：来人占卦遇天官，必然富禄降人间，一切谋望皆吉庆，忧愁消散主平安，月令皆善，诸事亨通，出门见喜，灾消病散。";
				    var qq1="离卦 离为火 离上离下\n\n  上九：王用出征，有嘉。折首，获其匪丑，无咎 。\n│ 《 象》曰：王用出征，以正邦也。\n六五：出涕沱若，戚嗟若，吉 。\n│ 《 象》曰：六五之吉，离王公也。\n九四：突如其来如，焚如，死如，弃如 。\n│ 《 象》曰：突如其来如，无所容也。\n九三：日昃之离，不鼓缶而歌，则大耋之嗟，凶 。\n│ 《 象》曰：日昃之离，何可久也。\n六二：黄离，元吉 。\n│ 《 象》曰：黄离元吉，得中道也。\n初九：履错然，敬之无咎 。\n│ 《 象》曰：履错之敬， 以辟咎也。\n";
		             break;
				case 20:
				    var qq="●旅卦●： lǚ\n●火山旅卦。 宿鸟焚巢。\n● 【旅】者，半羁旅也。不得舒展，故有宿鸟焚巢之象。 象：飞鸟树上驿高巢，小人用计把巢烧，君占自卦为不吉，一切谋望枉徒劳。 断：宿鸟焚巢时运低，交易任你走东西，生意买卖皆不利，官司口舌被人欺。出行费力，行人来还，走失无认，求财也难。";
				    var qq1="旅卦 火山旅 离上艮下\n\n  上九：鸟焚其巢，旅人先笑后号咷。丧牛于易，凶 。\n│ 《 象》曰：以旅在上，其义焚也。丧牛于易，终莫之闻也。\n六五：射雉，一矢亡，终以誉命 。\n│ 《 象》曰：终以誉命，上逮也。\n九四：旅于处，得其资斧，我心不快 。\n│ 《 象》曰：旅于处，未得位也。得其资斧，心未快也。\n九三：旅焚其次，丧其童仆，贞厉 。\n│ 《 象》曰：旅焚其次，亦以伤矣。以旅与下，其义丧也。\n六二：旅即次，怀其资，得童仆，贞 。\n│ 《 象》曰：得童仆贞，终无尤也。\n初六：旅琐琐，斯其所取灾 。\n│ 《 象》曰：旅琐琐，志穷灾也。\n";
		             break;
				case 21:
				    var qq="●睽卦●： kuí\n●火泽睽卦。 贩猪卖羊。\n● 【睽】者，乖异也，性相违弃。 象：贩猪卖羊运不遂，如同太公做买卖，贩猪羊快转头迟，猪羊同贩不让宰。 断：贩卖猪羊运不遂，卦见此人不见回，交易出行无好处，婚姻求财且莫为，名不利，利不全，病不好，做事难。";
				    var qq1="睽卦 火泽睽 离上兑下\n\n  上九：睽孤，见豕负涂，载鬼一车。先张之弧，后说之弧。匪寇婚媾，往遇雨则吉 。\n│ 《 象》曰：遇雨之吉，群疑亡也。\n六五：悔亡，厥宗噬肤，往何咎？│ 《 象》曰：厥宗噬肤，往有庆也。\n九四：睽孤，遇元夫。交孚，厉无咎 。\n│ 《 象》曰：交孚无咎，志行也。\n六三：见舆曳，其牛掣，其人天且劓，无初有终 。\n│ 《 象》曰：见舆曳，位不当也。无初有终，遇刚也。\n九二：遇主于巷，无咎 。\n│ 《 象》曰：遇主于巷，未失道也。\n初九：悔亡，丧马勿逐，自复。见恶人，无咎 。\n│ 《 象》曰：见恶人，以辟咎也。\n";
		             break;
				case 22:
				    var qq="●未济卦●： wèi jì\n●火水未济卦。\n● 太岁月建。 【未济】者，事未成也，火水不交。故有太岁月建之象。 象：凡事需要多小心，提防偷营动寨人，卦逢太岁多凶杀，时加谨慎祸不轻。 断：太岁入运事多愁，婚姻财帛莫强求，交易出行未见好，走失行人不露头，官讼不昌，口舌灾殃，目下忍耐，过月无妨。";
				    var qq1="未济卦 火水未济 离上坎下\n\n  上九：有孚于饮酒，无咎。濡其首，有孚失是 。\n│ 《 象》曰：饮酒濡首，亦不知节也。\n六五：贞吉，无悔。君子之光，有孚，吉 。\n│ 《 象》曰：君子之光，其晖吉也。\n九四：贞吉，悔亡，震用伐鬼方。三年有赏于大国 。\n│ 《 象》曰：贞吉悔亡，志行也。\n六三：未济，征凶，利涉大川 。\n│ 《 象》曰：未济征凶，位不当也。\n九二：曳其轮，贞吉 。\n│ 《 象》曰：九二贞吉，中以行正也。\n初六：濡其尾，吝 。\n│ 《 象》曰：濡其尾，亦不知极也。\n";
		             break;
				case 23:
				    var qq="●噬嗑卦●： shì hé\n●火雷噬嗑卦。 饥人遇食。 \n●【噬嗑】者，齿也、合也，故有饥人遇食之象。 象：运拙如同身受饥，有人面前送饭衣，适口充腹心欢喜，忧愁从此渐消移。 断：饥人遇食喜事来，凡事称心巧安排，疾病口舌消除散，生意合伙大发财。见官有理，出门见喜，婚姻成全，诸事如意。";
				    var qq1="噬嗑卦 火雷噬嗑 离上震下\n\n  上九：何校灭耳，凶 。\n│ 《 象》曰：何校灭耳，聪不明也。\n六五，噬干肉得黄金。贞厉，无咎 。\n│ 《 象》曰：贞厉无咎，得当也。\n九四：“噬干胏，得金矢。利艰贞，吉 。\n│ 《 象》曰：利艰贞吉，未光也。\n六三：噬腊肉，遇毒。小吝，无咎 。\n│ 《 象》曰：遇毒，位不当也。\n六二：噬肤灭鼻，无咎 。\n│ 《 象》曰：噬肤灭鼻，乘刚也。\n初九：履校灭趾，无咎 。\n│ 《 象》曰：履校灭趾，不行也。\n";
		             break;
				case 24:
				    var qq="●晋卦●： jìn\n●火地晋卦。 锄地得金\n● 【晋】者，进也。前进后益，故有锄地得金之象，乃一农人锄地抱垄，甚是辛苦，一日锄地锄出金子来，时来运转之兆也。 象：农人地里示锄草，谁知财金将人找，一锄锄出金子来，这个运气也算好。 断：锄地得金卦如何，占者逢之喜气多，谋事谋财皆如意，婚姻有成疾病消。口舌消散见官有理，行人即至，出门见喜。";
				    var qq1="晋卦 火地晋 离上坤下\n\n  上九：晋其角，维用伐邑。厉吉无咎，贞吝 。\n│ 《 象》曰：维用伐邑，道未光也。\n六五：悔亡，失得勿恤，往吉，无不利 。\n│ 《 象》曰：失得勿恤，往有庆也。\n九四：晋如硕鼠，贞厉 。\n│ 《 象》曰：硕鼠贞厉，位不当也。\n六三：众允，悔亡 。\n│ 《 象》曰：众允之志，上行也。\n六二：晋如，愁如，贞吉。受兹介福，于其王母 。\n│ 《 象》曰：受兹介福，以中正也。\n初六：晋如，摧如，贞吉。罔孚，裕无咎 。\n│ 《 象》曰：晋如摧如，独行正也。裕无咎，未受命也。\n";
		             break;
				case 25:
				    var qq="●大畜卦●： dà xù\n●山天大畜卦。 阵势得开。\n● 【大畜】者，所畜之聚，故有阵势得开之象。 象：忧愁常琐两眉头，千头万绪挂心留，从此以后打开阵，任意而行无阻挡。 断：此卦占之带六合，疾病口舌渐渐磨，婚姻合伙皆如意，谋望求财无差错。交了好运，行人有信，出门大吉，百事和顺。";
				    var qq1="大畜卦 山天大畜 艮上乾下\n\n  上九：何天之衢，亨 。\n│ 《 象》曰：何天之衢，道大行也。\n六五：豶豕之牙，吉 。\n│ 《 象》曰：六五之吉，有庆也。\n六四：童牛之牿，元吉 。\n│ 《 象》曰：六四元吉，有喜也。\n九三：良马逐，利艰贞。曰闲舆卫，利有攸往 。\n│ 《 象》曰：利有攸往，上合志也。\n九二：舆说辐 。\n│ 《 象》曰：舆说辐，中无尤也。\n初九：有厉，利已 。\n│ 《 象》曰：有厉利已，不犯灾也。\n";
		             break;
				case 26:
				    var qq="●蛊卦●： gǔ\n●山风蛊卦。 推磨贪道。\n● 【蛊】者，坏也。极而有此事，故有推磨贪道之象。 象：卦中爻象如推磨。顺当为福反为祸，心中有益且迟缓，几事尽从忙里错。 断：推磨贪道运不济，疾病口舌范忧愁，婚姻合伙心改变，走失不定在哪里。出行无益，婚姻不遂，走失难见，诸事难为。";
				    var qq1="蛊卦 山风蛊 艮上巽下\n\n  上九：不事王侯，高尚其事 。\n│ 《 象》曰：不事王侯，志可则也。\n六五：干父之蛊，用誉 。\n│ 《 象》曰：干父用誉，承以德也。\n六四：裕父之蛊，往见吝 。\n│ 《 象》曰：裕父之蛊，往未得也。\n九三：干父之蛊，小有晦，无大咎 。\n│ 《 象》曰：干父之蛊，终无咎也。\n九二：干母之蛊，不可贞 。\n│ 《 象》曰：干母之蛊，得中道也。\n初六：干父之蛊，有子，考无咎，厉终吉 。\n│ 《 象》曰：干父之蛊，意承考也。\n";
		             break;
				case 27:
				    var qq="●贲卦●： bì\n●山火贲卦。 喜气盈门。\n● 【贲】者，饰也，物之有饰，故有喜气盈门之象。 象：时来运转瑞气周，美德淑女君子求，钟鼓乐之大吉庆，占之逢之喜临头。 断：卦逢吉神在运中，纵是有凶不为凶，婚姻合伙渐渐好，生意财源日日增。出行吉祥，百事无妨，失物得见，月令高强。";
				    var qq1="贲卦 山火贲 艮上离下\n\n  上九：白贲，无咎 。\n│ 《 象》曰：白贲无咎，上得志也。\n六五：贲于丘园，束帛戋戋。吝，终吉 。\n│ 《 象》曰：六五之吉，有喜也。\n六四：贲如，皤如，白马翰如，匪寇婚媾 。\n│ 《 象》曰：六四，当位疑也。匪寇婚媾，终无尤也。\n九三：贲如，濡如，永贞吉 。\n│ 《 象》曰：永贞之吉，终莫之陵也。\n六二：贲其须 。\n│ 《 象》曰：贲其须，与上兴也。\n初九：贲其趾，舍车而徒 。\n│ 《 象》曰：舍车而徒，义弗乘也。\n";
		             break;
				case 28:
				    var qq="●艮卦●： gèn\n●艮为山卦。 矮巴钩枣。\n● 【艮】者，止也，止于极而不进也。故有矮巴钩枣之象。矮巴人，心想吃枣，走在树下，不料树高人矮，干着急，钩不着。占此卦者，主事干着急不顺。 象：财帛常在心中走，可恨眼前难到手，不如暂时且忍耐，逢着闲事休开口。 断：矮巴钩枣难捞着，交易行人不投机，谋望求财空费力，婚姻合伙总是虚。行人未至，头绪不真，口舌躲避，凡事留心。";
				    var qq1="艮卦 艮为山 艮上艮下\n\n  上九：敦艮，吉 。\n│ 《 象》曰：敦艮之吉，以厚终也。\n六五：艮其辅，言有序，悔亡 。\n│ 《 象》曰：艮其辅，以中正也。\n六四：艮其身，无咎 。\n│ 《 象》曰：艮其身，止诸躬也。\n九三：艮其限，列其夤，厉薰心 。\n│ 《 象》曰：艮其限，危薰心也。\n六二：艮其腓，不拯其随，其心不快 。\n│ 《 象》曰：不拯其随，未退听也。\n初六：艮其趾，无咎。利永贞 。\n│ 《 象》曰：艮其趾， 未失正也。\n";
		             break;
				case 29:
				    var qq="●损卦●： sǔn\n●山泽损卦。 推车掉耳。\n● 【损】者，减也，损内益外，如同车夫推车下坡，不料下到中间掉下耳来，左右安插不上，主占的此卦，事费力之兆也。 象：推车掉耳路难行，心中打算力不能，君子占此琐碎卦，纵然无灾也困穷。 断：时运不及费心多，比作推车受折磨，山路崎岖掉下耳，左插右按不着边。时运不及，不要胡为，交节换月，自然顺妥。";
				    var qq1="损卦 山泽损 艮上兑下\n\n  上九：弗损，益之，无咎，贞吉，利有攸往，得臣无家 。\n│ 《 象》曰：弗损益之，大得志也。\n六五：或益之十朋之龟，弗克违。元吉 。\n│ 《 象》曰：六五元吉，自上佑也。\n六四：损其疾，使遄有喜，无咎 。\n│ 《 象》曰：损其疾，亦可喜也。\n六三：三人行则损一人，一人行则得其友 。\n│ 《 象》曰：一人行，三则疑也。\n九二：利贞，征凶。弗损，益之 。\n│ 《 象》曰：九二利贞，中以为志也。\n初九：已事遄往，无咎。酌损之 。\n│ 《 象》曰：已事遄往，尚合志也。\n";
		             break;
				case 30:
				    var qq="●蒙卦●： méng\n●山水蒙卦。 小鬼偷钱。\n● 【蒙】者，味也，常味不明，故有小人偷钱之象。 象：卦中爻象犯小耗，君子占之运不高，婚姻合伙有琐碎，做事必然受苦劳。 断：占之此卦犯小耗，谋望求财空过桥，婚姻合伙有人破，交易出行受煎熬，为人多仗义，挣钱不费力，有心学仔细，倒被鬼偷去。";
				    var qq1="蒙卦 山水蒙 艮上坎下\n\n  上九：击蒙，不利为寇，利御寇 。\n│ 《 象》曰：利用御寇，上下顺也。\n六五：童蒙，吉 。\n│ 《 象》曰：童蒙之吉，顺以巽也。\n六四：困蒙，吝 。\n│ 《 象》曰：困蒙之吝，独远实也。\n六三：勿用娶女，见金夫，不有躬，无攸利 。\n│ 《 象》曰：勿用娶女，行不顺也。\n九二：包蒙，吉。纳妇，吉；子克家 。\n│ 《 象》曰：子克家，刚柔接也。\n初六：发蒙，利用刑人，用说桎梏；以往吝 。\n│ 《 象》曰：利用刑人， 以正法也。\n";
		             break;
				case 31:
				    var qq="●颐卦●： yí山雷颐卦。 渭水访贤。 \n●【颐】者，养也，口食物以自养，故有渭水访贤之象。 象：太公独钓渭水河，手执丝杆忧愁多。时来又遇文王访，自此永不受折磨。 断：文王访贤在渭河，谋望求财皆遂心，交易出行方如意，疾病口舌皆离身。渭水访贤，大吉大利。占着此卦，好了运气。";
				    var qq1="颐卦 山雷颐 艮上震下\n\n  上九：由颐，厉吉。利涉大川 。\n│ 《 象》曰：由颐厉吉，大有庆也。\n六五：拂经，居贞吉，不可涉大川 。\n│ 《 象》曰：居贞之吉，顺以从上也。\n六四：颠颐，吉。虎视眈眈，其欲逐逐，无咎 。\n│ 《 象》曰：颠颐之吉，上施光也。\n六三：拂颐，贞凶。十年勿用，无攸利 。\n│ 《 象》曰：十年勿用，道大悖也。\n六二：颠颐，拂经，于丘颐，征凶 。\n│ 《 象》曰：六二征凶，行失类也。\n初九：舍尔灵龟，观我朵颐，凶 。\n│ 《 象》 曰：观我朵颐，亦不足贵也。\n";
		             break;
				case 32:
				    var qq="●剥卦●： bō\n●山地剥卦。 莺鹊同林\n● 【剥】者，落也，阴升阳落，故有莺鹊同林之象，如同有一小鹊，天晚枝宿大林之中，不想有莺在内，莺见鹊即生恶意，占此卦者，主小人暗算，干事无成之兆也。 象：鹊遇天晚入林中，不想内里先有莺，莺见小鹊生恶意，口舌是非不见轻。 断：莺鹊同林不相合，占的此卦琐碎多，恩人无义反为怨，是非平地起风波。";
				    var qq1="剥卦 山地剥 艮上坤下\n\n  上九：硕果不食，君子得舆，小人剥庐 。\n│ 《 象》曰：君子得舆，民所载也。小人剥庐，终不可用也。\n六五：贯鱼。以宫人宠，无不利 。\n│ 《 象》曰：以宫人宠，终无尤也。\n六四：剥床以肤，凶 。\n│ 《 象》曰：剥床以肤，切近灾也。\n六三：剥之，无咎 。\n│ 《 象》曰：剥之无咎，失上下也。\n六二：剥床以辨，蔑贞，凶 。\n│ 《 象》曰：剥床以辨，未有与也。\n初六：剥床以足，蔑贞，凶 。\n│ 《 象》曰：剥床以足， 以灭下也。\n";
		             break;
				case 33:
				    var qq="●夬卦●： guài\n●泽天乖卦。 游蜂脱网。\n● 【乖】者，决也。刚健而悦，故有游蜂脱网之象。 象：入蜘蛛网似天牢，粘住游蜂翅翎毛，幸得大风吹破网，脱离灾难又逍遥。 断：游蜂脱网喜无边，添财进口富禄连，外财通达内财顺，富贵荣华胜 以前，词讼了结，疾病除根，求财到手，做事遂心。";
				    var qq1="夬卦 泽天夬 兑上乾下\n\n  上六：无号，终有凶 。\n│ 《 象》曰：无号之凶，终不可长也。\n九五：苋陆夬夬，中行无咎 。\n│ 《 象》曰：中行无咎，中未光也。\n九四：臀无肤，其行次且。牵羊悔亡，闻言不信 。\n│ 《 象》曰：其行次且，位不当也。闻言不信，聪不明也。\n九三：壮于頄，有凶。君子夬夬独行，遇雨若濡，有愠无咎 。\n│ 《 象》曰：君子夬夬，终无咎也。\n九二：惕号，莫夜有戎，勿恤 。\n│ 《 象》曰：有戎勿恤，得中道也。\n初九：壮于前趾，往不胜为吝 。\n│ 《 象》曰：不胜而往，咎也。\n";
		             break;
				case 34:
				    var qq="●大过卦●： dà guò\n●泽风大过卦。 夜梦金钱。\n● 【大过】者，祸也。二阴不胜其重，故有夜梦金钱之象。 象：夜梦金钱醒来空，醒来总是一文无，目下只是求本分，思念只是空劳神。 断：夜梦金银醒来空，求名求利大不通，婚姻难成交易散，走失行人不见踪。月令不和，做事无着，凡事忍耐，休去琢磨。";
				    var qq1="大过卦 泽风大过 兑上巽下\n\n  上六：过涉灭顶，凶，无咎 。\n│ 《 象》曰：过涉之凶，不可咎也。\n九五：枯杨生华，老妇得士夫，无咎无誉 。\n│ 《 象》曰：枯杨生华，何可久也？老妇士夫，亦可丑也。\n九四：栋隆，吉。它吝 。\n│ 《 象》曰：栋隆之吉，不桡乎下也。\n九三：栋桡，凶 。\n│ 《 象》曰：栋桡之凶，不可以有辅也。\n九二：枯杨生稊，老夫得其女妻，无不利 。\n│ 《 象》曰：老夫女妻，过以相与也。\n初六：藉用白茅，无咎 。\n│ 《 象》曰：藉用白茅，柔在下也。\n";
		             break;
				case 35:
				    var qq="●革卦●： gé\n●泽火革卦。 旱苗得雨。 \n●【革】者，变革也。凶变为吉，故有旱苗得雨之象。春苗久旱，夏天无雨，苗枯，幸得油然作云，沛然作雨苗则勃然而生，占此卦者，时来运转。 象：旱苗得雨茂堂堂，交易求财也相当，婚姻合伙皆如意，官司疾病皆无妨。 断：苗逢旱天渐渐衰，幸得天恩降雨来，忧去喜来能变化，谋望求财遂心怀。出门大喜，走失能找，行人来信，百般凑巧。";
				    var qq1="革卦 泽火革 兑上离下\n\n  上六：君子豹变，小人革面，征凶，居贞吉 。\n│ 《 象》曰：君子豹变，其文蔚也。小人革面， 顺以从君也。\n九五：大人虎变，未占有孚 。\n│ 《 象》曰：大人虎变，其文炳也。\n九四：悔亡，有孚，改命，吉 。\n│ 《 象》曰：改命之吉，信志也。\n九三：征凶贞厉。革言三就，有孚 。\n│ 《 象》曰：革言三就，又何之矣。\n六二：己日乃革之，征吉，无咎 。\n│ 《 象》曰：己日革之，行有嘉也。\n初九：巩用黄牛之革 。\n│ 《 象》曰：巩用黄牛，不可以有为也。\n";
		             break;
				case 36:
				    var qq="●咸卦●： xián\n●泽山咸卦。 萌芽出土。\n● 【咸】者，交感也，天地感而万物生，故有萌芽出土之象。 象：过去黄金失色，时来运转临月令，该咱出头已无差，喜气洋洋心放宽。从前滚来滚去，今日又把芽发，往后财源滚滚，纵有口舌不用怕。 断：脚踏实地转悠悠，时运不来莫强求，幸得今日时运转，自有好事在后头。谋望有成，出门可行，走失有信，疾病安宁。";
				    var qq1="咸卦 泽山咸 兑上艮下\n\n  上六：咸其辅，颊，舌 。\n│ 《 象》曰：咸其辅，颊，舌，滕口说也。\n九五：咸其脢，无悔 。\n│ 《 象》曰：咸其脢，志末也。\n九四：贞吉悔亡，憧憧往来，朋从尔思 。\n│ 《 象》曰：贞吉悔亡，未感害也。憧憧往来，未光大也。\n九三：咸其股，执其随，往吝 。\n│ 《 象》曰：咸其股，亦不处也。志在随人，所执下也。\n六二：咸其腓，凶，居吉 。\n│ 《 象》曰：虽凶居吉，顺不害也。\n初六：咸其拇 。\n│ 《 象》曰：咸其拇，志在外也。\n";
		             break;
				case 37:
				    var qq="●兑卦●： duì\n●兑为泽卦。 趁水和泥。 \n●【兑】者，悦也，临事而悦。故有趁水和泥之象。 象：这个卦象真有趣，做事觉的不费力，休要错过这机会，事事觉得随心意。 断：趁水和泥泥更匀，头向有准宜出门，交易婚姻大有意，走失行人不用寻。口舌消散，病遇良医，求财到手，大吉大利。";
				    var qq1="兑卦 兑为泽 兑上兑下\n\n  上六：引兑 。\n│ 《 象》曰：上六引兑，未光也。\n九五：孚于剥，有厉 。\n│ 《 象》曰：孚于剥，位正当也。\n九四：商未宁，介疾有喜 。\n│ 《 象》曰：九四之喜，有庆也。\n六三：来兑，凶 。\n│ 《 象》曰：来兑之凶，位不当也。\n九二：孚兑，吉，悔亡 。\n│ 《 象》曰：孚兑之吉，信志也。\n初九：和兑，吉 。\n│ 《 象》曰：和兑之吉，行未疑也。\n";
		             break;
				case 38:
				    var qq="●困卦●： kùn\n●泽水困卦。 挪梯抽杆。\n● 【困】者，穷困也，而不能自振。故有挪梯抽杆之象。 象：时运不来好伤怀，二人商议来摸雀，打梯用杆没到手，不想梯杆有人挪，上去了就是下不来。 断：今有小人暗来欺，千方百计商量你，明明前来说好话，挪梯抽杆失主意。当交君子，莫交小人，凡事小心，谨慎从事，不受贫困。";
				    var qq1="困卦 泽水困 兑上坎下\n\n  上六：困于葛藟，于臲卼，曰动悔。有悔，征吉 。\n│ 《 象》曰：困于葛藟，未当也。 动悔有悔，吉行也。\n九五：劓刖，困于赤绂，乃徐有说，利用祭祀 。\n│ 《 象》曰：劓刖，志未得也。乃徐有说，以 中直也。利用祭祀，受福也。\n九四：来徐徐，困于金车，吝，有终 。\n│ 《 象》曰：来徐徐，志在下也。虽不当位，有与也。\n六三：困于石，据于蒺藜，入于其宫，不见其妻，凶 。\n│ 《 象》曰：据于蒺藜，乘刚也。入于其宫，不见其妻，不祥也。\n九二：困于酒食，朱绂方来，利用亨祀。征凶，无咎 。\n│ 《 象》曰：困于酒食，中有庆也。\n初六：臀困于株木，入于幽谷，三岁不觌 。\n│ 《 象》曰：入于幽谷，幽不明也。\n";
		             break;
				case 39:
				    var qq="●随卦●： suí\n●泽雷随卦。 推车靠涯。\n● 【随】者，顺也。能顺物，故有推车靠涯之象。 象：泥里步踏这几年，推车靠涯在眼前，目下就该再用力，扒上涯去财源发。 断：推车靠涯道路干，谋望求财不费难，婚姻合伙无阻碍，疾病口舌得安然。苦极生荣，喜气盈盈，一切做事，不大离形。";
				    var qq1="随卦 泽雷随 兑上震下\n\n  上六：拘系之，乃从维之。王用亨于西山 。\n│ 《 象》曰：拘系之，上穷也。\n九五：孚于嘉，吉 。\n│ 《 象》曰：孚于嘉吉，位正中也。\n九四：随有获，贞凶。有孚，在道以明，何咎？│ 《 象》曰：随有获，其义凶也。有孚在道， 明功也。\n六三：系丈夫，失小子。随有求，得，利居贞 。\n│ 《 象》曰：系丈夫，志舍下也。\n六二：系小子，失丈夫 。\n│ 《 象》曰：系小子，弗兼与也。\n初九：官有渝，贞吉。出门交有功 。\n│ 《 象》曰： 官有渝，从正吉也。出门交有功，不失也。\n";
		             break;
				case 40:
				    var qq="●萃卦●： cuì\n●泽地萃。 鲤鱼变龙。 \n●【萃】者，升聚也，万物萃聚，故有鲤鱼变龙之象。 象：游鱼戏水被网惊，跳过龙门身化龙，三尺杨柳垂金线，万朵桃花显你能。 断：鲤鱼化龙喜气来，口舌疾病身无灾，犹疑从今都消散，祸门闭来福门开。鲤鱼化龙，喜事重重，求财到手，做事有成。";
				    var qq1="萃卦 泽地萃 兑上坤下\n\n  上六：赍咨涕洟，无咎 。\n│ 《 象》曰：赍咨涕洟，未安上也。\n九五：萃有位，无咎。匪孚，元永贞，悔亡 。\n│ 《 象》曰：萃有位，志未光也。\n九四：大吉，无咎 。\n│ 《 象》曰：大吉无咎，位不当也。\n六三：萃如，嗟如，无攸利。往无咎，小吝 。\n│ 《 象》曰：往无咎，上巽也。\n六二：引吉，无咎，孚乃利用禴 。\n│ 《 象》曰：引吉无咎，中未变也。\n初六：有孚不终，乃乱乃萃。若号，一握为笑。勿恤，往无咎 。\n│ 《 象》曰：乃乱乃萃，其志乱也。\n";
		             break;
				case 41:
				    var qq="●需卦●： xū\n●水天需卦。 明珠出海。 \n●【需】者，须也，得时而动，故有明珠出海之象。 象：明珠土埋日久深，无光无亮到如今，忽然大风吹土去，自然显露又重新。 断：土里显出明珠来，口舌官司消散开，走失行人当见面，交易有成没有灾。谋望有成，婚姻交合，求财如意，挪动喜也。";
				    var qq1="需卦 水天需 坎上乾下\n\n  上六：入于穴，有不速之客三人 来，敬之终吉 。\n│ 《 象》曰：不速之客来，敬之终吉。虽不当位，未大失也。\n九五：需于酒食，贞吉 。\n│ 《 象》曰：酒食贞吉，以中正也。\n六四：需于血，出自穴 。\n│ 《 象》曰：需于血，顺以听也。\n九三：需于泥，致寇至 。\n│ 《 象》曰：需于泥，灾在外也。自我致寇，敬慎不败也。\n九二：需于沙，小有言，终吉 。\n│ 《 象》曰：需于沙，衍在中也。虽小有言，以终吉也。\n初九：需 于郊，利用恒，无咎 。\n│ 《 象》曰：需于郊，不犯难行也。利用恒，无咎；未失常也。\n";
		             break;
				case 42:
				    var qq="●井卦●： jǐng\n●水风井卦。 枯井生泉。\n● 【井】者，穴通也。水从井出。故有枯井生泉之象。 象：枯井废了好多年，一朝泉出流水鲜，滋生万物人称美，时来运转乐自然。 断：枯井生泉富禄加，名声喜气大光华，以前虽昌驳杂日，望后自然有发达。精神渐爽，富禄日增，出入皆吉，白事亨通。";
				    var qq1="井卦 水风井 坎上巽下\n\n  上六：井收勿幕，有孚元吉 。\n│ 《 象》曰：元吉在上，大成也。\n九五：井冽寒泉，食 。\n│ 《 象》曰：寒泉之食，中正也。\n六四：井甃，无咎 。\n│ 《 象》曰：井甃无咎，修井也。\n九三：井渫不食，为我心恻。可用汲，王明，并受其福 。\n│ 《 象》曰：井渫不食，行恻也。求 王明，受福也。\n九二：井谷射鲋，瓮敝漏 。\n│ 《 象》曰：井谷射鲋，无与也。\n初六：井泥不食，旧井无禽 。\n│ 《 象》曰：井泥不 食，下也。旧井无禽，时舍也。\n";
		             break;
				case 43:
				    var qq="●既济卦●： jì jì\n●水火既济卦。 金榜题名。\n● 【既济】者，既成之事也。 象：金榜以上题姓名，不负当年窗下功，人逢此卦多吉应，一切谋望大亨通。 断：金榜题名喜气新，求财到手利婚姻，如今交了顺当运，步步登高大遂心。月令即善，寻人得见，走失能找，口舌消散。";
				    var qq1="既济卦 水火既济 坎上离下\n\n  上六：濡其首，厉 。\n│ 《 象》曰：濡其首厉，何可久也。\n九五：东邻杀牛，不如西邻之禴祭，实受其福 。\n│ 《 象》曰：东邻杀牛，不如西邻之时也。 实受其福，吉大来也。\n六四：繻有衣袽，终日戒 。\n│ 《 象》曰：终日戒，有所疑也。\n九三：高宗伐鬼方，三年克之，小人勿用 。\n│ 《 象》曰：三年克之，惫也。\n六二：妇丧其茀，勿逐，七日得 。\n│ 《 象》曰：七日得，以中道也。\n初九：曳其轮，濡其尾，无咎 。\n│ 《 象》曰： 曳其轮，义无咎也。\n";
		             break;
				case 44:
				    var qq="●蹇卦●： jiǎn\n●水山赛卦。 雨雪满途。\n● 【赛】者，难也，足不能前进，行走艰困，故有雨雪满途之象。 象：大雨洒地雪漫天，路上行人艰又难，拖泥带水费尽力，事不遂心且耐烦。 断：雨雪满途甚行踪，交易出行路不通，疾病难治婚难成，谋望求财真难办。行人未至，头向不稳，官司缠身，求名不准。";
				    var qq1="蹇卦 水山蹇 坎上艮下\n\n  上六：往蹇来硕，吉。利见大人 。\n│ 《 象》曰：往蹇来硕，志在内也。利见大人，以从贵也。\n九五：大蹇，朋来 。\n│ 《 象》曰：大蹇朋来，以中节也。\n六四：往蹇来连 。\n│ 《 象》曰：往蹇来连，当位实也。\n九三：往蹇来反 。\n│ 《 象》曰：往蹇来反，内喜之也。\n六二：王臣蹇蹇，匪躬之故 。\n│ 《 象》曰：王臣蹇蹇，终无尤也。\n初六：往蹇来誉 。\n│ 《 象》曰：往蹇来誉，宜待也。\n";
		             break;
				case 45:
				    var qq="●节卦●： jié\n●水泽节卦。 斩将封神。\n● 【节】者，有限而止也。故有斩将封神之象。姜太公灭纣王后，一切鬼魂尽赴台前，俱各受神得位，占此卦者，百无禁忌之兆。 象：时来运转姜太公，登台封神喜气生，到此诸神皆退位，总然有祸不成凶。 断：太公封神不非凡，谋求钱财不费难，交易合伙大吉庆，疾病口舌消除安。月令高强，名声大扬，走失有信，官事无妨。";
				    var qq1="节卦 水泽节 坎上兑下\n\n  上六：苦节，贞凶，悔亡 。\n│ 《 象》曰：苦节贞凶，其道穷也。\n九五：甘节，吉，往有尚 。\n│ 《 象》曰：甘节之吉，居位中也。\n六四：安节，亨 。\n│ 《 象》曰：安节之亨，承上道也。\n六三：不节若，则嗟若，无咎 。\n│ 《 象》曰：不节之嗟，又谁咎也？\n九二：不出门庭，凶 。\n│ 《 象》曰：不出门庭凶，失时极也。\n初九：不出户庭，无咎 。\n│ 《 象》曰：不出户庭，知通塞也。\n";
		             break;
				case 46:
				    var qq="●坎卦●： kǎn\n●坎为水卦。 水底捞月。\n● 【坎】者，陷也。劳而无功，故有水底捞月之象。水井内乃有一轮明月照入水中，甚是真切，来了一人，下水去捞，占得此卦，受劳而无功之兆。 象：一轮明 月照水中，只见影子不见踪，愚人当财下去捞，摸来摸去一场空。 断：水中明月不可捞，占此逢之运不高，交易出行难获利，走失行人无音耗。求名不遂，疾病未愈，婚姻无成，合伙不利。";
				    var qq1="坎卦 坎为水 坎上坎下\n\n  上六：系用徽繹，置于丛棘，三岁不得，凶 。\n│ 《 象》曰：上六失道，凶三岁也。\n九五：坎不盈，祗既平，无咎 。\n│ 《 象》曰：坎不盈，中未大也。\n六四：樽酒簋贰，用缶，纳约自牖，终无咎 。\n│ 《 象》曰：樽酒簋贰，刚柔际也。\n六三：来之坎坎，险且枕，入于坎窞，勿用 。\n│ 《 象》曰：来之坎坎，终无功也。\n九二：坎有险，求小得 。\n│ 《 象》曰：求小得，未出中也。\n初六：习坎，入于坎窞，凶 。\n│ 《 象》曰：习坎入坎，失道凶也。\n";
		             break;
				case 47:
				    var qq="●屯卦●： zhūn\n●水雷屯卦。 乱丝无头。\n● 【屯】者，物始生而未遇也。故有乱丝无头之象。乃一机户在室外落丝，忽然狂风大作，将丝刮乱，左撕右扯找不出头来，占此卦者，颠倒错乱之象。 象：风刮乱丝不见头，逢着闲事暂切推，慢从缓来方可顺。 断：交易求财无好处，谋事见贵心不遂，疾病难好，婚姻不巧，口舌琐碎，凡事打绞。";
				    var qq1="屯卦 水雷屯 坎上震下\n\n  上六：乘马班如，泣血涟如 。\n│ 《 象》曰：泣血涟如，何可长也。\n九五：屯其膏，小贞吉，大贞凶 。\n│ 《 象》曰：屯其膏，施未光也。\n六四：乘马班如，求婚媾，往吉，无不利 。\n│ 《 象》曰：求而往，明也。\n六三：既鹿无虞，惟入于林中。君子几，不如舍，往吝 。\n│ 《 象》曰：既鹿无虞，以纵禽也。君 子舍之，往吝，穷也。\n六二：屯如邅如，乘马班如。匪寇，婚媾，女子贞不字，十年乃字 。\n│ 《 象》曰：六二之难，乘刚也。十年乃字，反常也。\n初九：磐桓，利居贞，利建侯 。\n│ 《 象》曰：虽磐桓，志行正也。以贵下贱，大得民也。\n";
		             break;
				case 48:
				    var qq="●比卦●： bì\n●水地比卦。 船得顺风。\n● 【比】者，辅也，相辅佐之意，故有船得顺风之象。 象：顺风行船柱起蓬，上天又助一阵风，不用费力逍遥去，任意而行走西东。 断：船得顺风不可停，欲向何方任意新刚，交易求财大得利，一切谋望事有成。走失可寻，见官有理，婚姻求名，管保恭喜。";
				    var qq1="比卦 水地比 坎上坤下\n\n  上六：比之无首，凶 。\n│ 《 象》曰：比之无首，无所终也。\n九五：显比，王用三驱，失前禽。邑人不诫，吉 。\n│ 《 象》曰：显比之吉，位正中也。舍逆取顺，失前禽也。邑人不诫，上使中也。\n六四：外比之，贞吉 。\n│ 《 象》曰：外比于贤，以从上也。\n六三：比之匪人 。\n│ 《 象》曰：比之匪人，不亦伤乎？\n六二：比之自内，贞吉 。\n│ 《 象》曰：比之自内，不自失也。\n初六：有孚比之，无咎。有孚盈缶，终来有它吉 。\n│ 《 象》曰：比之初六，有它吉也。\n";
		             break;
				case 49:
				    var qq="●大壮卦●： dà zhuàng\n●雷天大壮卦。 工师得木。\n● 【大壮】者，盛也。事得兴隆，故有共师得木之象。 象：卦占工师得大木，眼前应在路上走，时来运转多顺当，有事尽管放心做。 断：买卖求财大亨通，婚姻合伙皆如意，一切谋望皆成功。出门吉利，口舌远避，疾病皆除，行人即至。";
				    var qq1="大壮卦 雷天大壮 震上乾下\n\n  上六：羝羊触藩，不能退，不能遂，无攸利，艰则吉 。\n│ 《 象》曰：不能退，不能遂，不祥也。艰则吉，咎不长也。\n六五：丧羊于易，无悔 。\n│ 《 象》曰：丧羊于易，位不当也。\n九四：贞吉悔亡，藩决不羸，壮于大舆之輹 。\n│ 《 象》曰：藩决不羸，尚往也。\n九三：小人用壮，君子用罔，贞厉。羝羊触藩，羸其角 。\n│ 《 象》曰：小人用壮，君子罔也。\n九二：贞吉 。\n│ 《 象》曰：九二贞吉，以中也。\n初九：壮于趾，征凶，有孚 。\n│ 《 象》曰：壮于趾，其孚穷也。\n";
		             break;
				case 50:
				    var qq="●恒卦●： héng\n●雷风恒卦。 鱼来撞网。\n● 【恒】者，久也。故有鱼来撞网之象。 象：渔翁寻鱼运气好，鱼来撞网跑不了，别人使劲侯不来，谁知一到就凑巧。 断：鱼来撞网乐自然，卦占行人很快还，交易出行两成全，谋望成事不费难。出行凑巧，有病即好，虽然口舌，自然消了。";
				    var qq1="恒卦 雷风恒 震上巽下\n\n  上六：振恒，凶 。\n│ 《 象》曰：振恒在上，大无功也。\n六五：恒其德，贞。妇人吉，夫子凶 。\n│ 《 象》曰：妇人贞吉，从一而终也。夫子制义，从妇凶也。\n九四：田无禽 。\n│ 《 象》曰：久非其位，安得禽也？\n九三：不恒其德，或承之羞，贞吝 。\n│ 《 象》曰：不恒其德，无所容也。\n九二：悔亡 。\n│ 《 象》曰：九二悔亡，能久中也。\n初六：浚恒，贞凶，无攸利 。\n│ 《 象》曰：浚恒之凶，始求深也。\n";
		             break;
				case 51:
				    var qq="●丰卦●： fēng\n●雷火丰卦。 古镜重明。\n● 【丰】者，大也，以明而动，故有古镜重明之象，似一多年古镜，日久不甚光明，忽然遇一匠人磨明，又极光明，占此卦者，时来运转之兆。 象：古镜昏暗好多年，一朝磨的似月圆，君子谋事逢此卦，时来运转喜自然。 断：古镜重明甚光显，主人目下运气转，婚姻求财多吉庆，走失行人去不远，出行有益，交易得魁，疾病见好，求名必遂。";
				    var qq1="丰卦 雷火 丰震上离下\n\n  上六：丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶 。\n│ 《 象》曰：丰其屋，天际翔也。窥其户，阒其无人，自藏也。\n六五：来章，有庆誉，吉 。\n│ 《 象》曰：六五之吉，有庆也。\n九四：丰其蔀，日中见斗，遇其夷主，吉 。\n│ 《 象》曰：丰其蔀，位不当也。日中见斗， 幽不明也。遇其夷主，吉行也。\n九三：丰其沛，日中见昧，折其右肱，无咎 。\n│ 《 象》曰：丰其沛，不可大事也。折其右肱， 终不可用也。\n六二：丰其蔀，日中见斗。往得疑疾，有孚发若，吉 。\n│ 《 象》曰：有孚发若，信以发志也。\n初九：遇其配主，虽旬无咎，往有尚 。\n│ 《 象》曰： 虽旬无咎，过旬灾也。\n";
		             break;
				case 52:
				    var qq="●小过卦●： xiǎo guò\n●雷山小过卦。 急过小桥。\n● 【小过】者，阳也，阳过于阴，故有急过小桥之象。 象：行人路过独木桥，心中恍惚眼力瞧，爽快保你能过去，慢走一步不牢靠。 断：独木桥上步难行，主人心事不安宁，交易合伙宜爽快，婚姻有成莫迟疑。求财到手，官事平常，目下有害，交节自强。";
				    var qq1="小过卦 雷山小过 震上艮下\n\n  上六：弗遇过之，飞鸟离之，凶，是谓灾眚 。\n│ 《 象》曰：弗遇过之，已亢也。\n六五：密云不雨，自我西郊。公弋取彼在穴 。\n│ 《 象》曰：密云不雨，已上也。\n九四：无咎。弗过遇之，往厉必戒，勿用永贞 。\n│ 《 象》曰：弗过遇之，位不当也。往厉必戒，终不可长也。\n九三：弗过防之，从或戕之，凶 。\n│ 《 象》曰：从或戕之，凶如何也。\n六二：过其祖，遇其妣。不及其君，遇其臣。无咎 。\n│ 《 象》曰：不及其君，臣不可过也。\n初六：飞鸟以凶 。\n│ 《 象》曰：飞鸟以凶，不可如何也。\n";
		             break;
				case 53:
				    var qq="●归妹卦●： guī mèi\n●雷泽归妹卦。 缘木求鱼。\n● 【归妹】者，少女从长男，阴阳不交，故有缘木求鱼之象。 象：求鱼须得水中求，树上求之万不通，受尽辛苦难遂意，劳而无功运平平。 断：缘木求鱼事多难，虽不得鱼后无灾，行险弄巧费尽心，事不遂意妄安排。月令不好，做事颠倒，打算的多，遂心的少。";
				    var qq1="归妹卦 雷泽归妹 震上兑下\n\n  上六：女承筐无实，士刲羊无血，无攸利 。\n│ 《 象》曰：上六无实，承虚筐也。\n六五：帝乙归妹，其君之袂不如其娣之袂良，月几望，吉 。\n│ 《 象》曰：帝乙归妹，不如其娣之袂良也。其位在中，以贵行也。\n九四：归妹愆期，迟归有时 。\n│ 《 象》曰：愆期之志，有待而行也。\n六三：归妹以须，反归以娣 。\n│ 《 象》曰：归妹以须，未当也。\n九二：眇能视，利幽人之贞 。\n│ 《 象》曰：利幽人之贞，未变常也。\n初九：归妹以娣，跛能履，征吉 。\n│ 《 象》曰：归 妹以娣，以恒也。跛能履，吉相承也。\n";
		             break;
				case 54:
				    var qq="●解卦●： jiě\n●雷水解卦。 五关脱难。 \n●【解】者，难散也。遇难即解，故有五关脱难之象。 象：目下月令如过关，千辛万苦受煎熬，时来临相有人救，任意所为能过关。 断：五关脱难运抬头，劝君应当把财求，交易出行有人助，疾病口舌不须愁。婚姻大好，行人来的早，谋望成全，诸事凑巧。";
				    var qq1="解卦 雷水解 震上坎下\n\n  上六：公用射隼于高墉之上，获之无不利 。\n│ 《 象》曰：公用射隼，以解悖也。\n六五：君子维有解，吉，有孚于小人 。\n│ 《 象》曰：君子有解，小人退也。\n九四：解而拇，朋至斯孚 。\n│ 《 象》曰：解而拇，未当位也。\n六三：负且乘，致寇至，贞吝 。\n│ 《 象》曰：负且乘，亦可丑也。自我致戎，又谁咎也。\n九二：田获三狐，得黄矢，贞吉 。\n│ 《 象》曰：九二贞吉，得中道也。\n初六：无咎 。\n│ 《 象》曰：刚柔之际，义无咎也。\n";
		             break;
				case 55:
				    var qq="●震卦●： zhèn\n●震为雷卦。 金钟夜撞。\n● 【震】者，动也，震惊百里，故有金钟夜撞之象。一棵金钟埋没多时，忽然一日冲出，重新高挂，于夜间敲钟一下，声音响亮，占此卦者，诸事有成之兆。 象：一棵金钟在淤泥，人人拿它当顽石，忽然日钟高悬起，响亮一声天下知。 断：占者逢这撞金钟，时来运转响一声，谋望求财不费力，交易出行大有功。求名趁意，做事遂心，走失行人，自然有音。";
				    var qq1="震卦 震为雷 震上震下\n\n  上六：震索索，视矍矍，征凶。震不于其躬，于其邻，无咎。婚媾有言 。\n│ 《 象》曰：震索索，未得中也。虽凶无咎，畏邻戒也。\n六五：震往来厉，亿无丧，有事 。\n│ 《 象》曰：震往来厉，危行也。其事在中，大无丧也。\n九四：震遂泥 。\n│ 《 象》曰：震遂泥，未光也。\n六三：震苏苏，震行无眚 。\n│ 《 象》曰：震苏苏，位不当也。\n六二：震来厉，亿丧贝，跻于九陵，勿逐，七日得 。\n│ 《 象》曰：震来厉，乘刚也。\n初九：震来虩虩，后笑言哑哑，吉 。\n│ 《 象》曰： 震来虩虩，恐致福也。笑言哑哑，后有则也。\n";
		             break;
				case 56:
				    var qq="●豫卦●： yǜ \n●雷地豫卦。 青龙得位。\n● 【豫】者，乐和也。人心乐和，故有青龙得位之象。 象：太公插下杏黄旗，收妖为徒而归歧，自此青龙得了位，一切谋望百事顺。 断：青龙得水喜重生，谋望求财事有成，婚姻出行无阻碍。是非口舌得安宁。交易有成，行人即归，收取可得，合伙无妨。";
				    var qq1="豫卦 雷地豫 震上坤下\n\n  上六：冥豫，成有渝，无咎 。\n│ 《 象》曰：冥豫在上，何可长也？\n六五：贞疾，恒不死 。\n│ 《 象》曰：六五贞疾，乘刚也。恒不死，中未亡也。\n九四：由豫，大有得。勿疑，朋盍簪 。\n│ 《 象》曰：由豫大有得，志大行也。\n六三：盱豫，悔。迟有悔 。\n│ 《 象》曰：盱豫有悔，位不当也。\n六二：介于石，不终日，贞吉 。\n│ 《 象》曰：不终日，贞吉；以中正也。\n初六：鸣豫，凶 。\n│ 《 象》曰：初六鸣豫，志穷凶也。\n";
		             break;
				case 57:
				    var qq="●泰卦●： tài\n●地天泰卦。 捷报三喜。 \n●【泰】者，通泰也。诸事通泰，故有喜报三元之象。 象：学问满腹入科场，三元及第得意回，从此解去愁和闷，且喜平地一声雷。 断：喜报三元运气强，谋望求财大吉祥，交易出行多得意，是非口舌皆无妨。婚姻有成，行人及至，走失可寻，诸事趁意。";
				    var qq1="泰卦 地天泰 坤上乾下\n\n  上六：城复于隍，勿用师。自邑告命，贞吝 。\n│ 《 象》曰：城复于隍，其命乱也。\n六五：帝乙归妹，以祉元吉 。\n│ 《 象》曰：以祉元吉，中以行愿也。\n六四：翩翩，不富以其邻，不戒以孚 。\n│ 《 象》曰：翩翩不富，皆失实也。不戒以孚，中心愿也。\n九三：无平不陂，无往不复，艰贞无咎。勿恤其孚，于食有福 。\n│ 《 象》曰：无往不复，天地际也。\n九二：包荒，用冯河，不遐遗。朋亡，得尚于中行 。\n│ 《 象》曰：包荒，得尚于中行，以光大也。\n初九：拔茅茹，以其汇，征吉 。\n│ 《 象》曰：拔茅征吉，志在外也。\n";
		             break;
				case 58:
				    var qq="●升卦●： shēng\n●地风升卦。 指日高升。\n● 【升】者，进也，似乎升阶，故有指日高升之象。象：士人来占必得名，生意买卖也兴隆，匠艺之人交易好，庄农逢之好收成。 断：指日高升气象新，走失行人有音信，巧名出行遂心好，疾病口舌皆除根。求财到手，谋望有成，寻人得见，家宅安宁。";
				    var qq1="升卦 地风升 坤上巽下\n\n  上六：冥升，利于不息之贞 。\n│ 《 象》曰：冥升在上，消不富也。\n六五：贞吉，升阶 。\n│ 《 象》曰：贞吉升阶，大得志也。\n六四：王用亨于岐山，吉，无咎 。\n│ 《 象》曰：王用亨于岐山，顺事也。\n九三：升虚邑 。\n│ 《 象》曰：升虚邑，无所疑也。\n九二：孚乃利用禴，无咎 。\n│ 《 象》曰：九二之孚，有喜也。\n初六：允升，大吉 。\n│ 《 象》曰：允升大吉，上合志也。\n";
		             break;
				case 59:
				    var qq="●明夷卦●： míng yí\n●地火明夷卦。 过河拆桥。\n● 【明夷】者伤也，明而见伤。故有过河拆桥之象，如同与人修桥渡河，不想人先过去，将桥拆掉，不能前进，占的此卦，主临事难为，多有不顺之兆。 象：时乘运拙忙修桥，急忙过河拆了桥，恩人无义反为怨，凡事无功主受劳。 断：过河拆桥事堪伤，交易出行有灾殃，谋望求财空费力，婚姻合伙不相当。行人未至，头绪不准，口舌要避，凡事不稳。";
				    var qq1="明夷卦 地火明夷 坤上离下\n\n  上六：不明，晦。初登于天，后入于地 。\n│ 《 象》曰：初登于天，照四国也。后入于地，失则也。\n六五：箕子之明夷，利贞 。\n│ 《 象》曰：箕子之贞，明不可息也。\n六四：入于左腹，获明夷之心，于出门庭 。\n│ 《 象》曰：入于左腹，获心意也。\n九三：明夷于南狩，得其大首，不可疾，贞 。\n│ 《 象》曰：南狩之志，乃大得也。\n六二：明夷，夷于左股，用拯马壮，吉 。\n│ 《 象》曰：六二之吉，顺以则也。\n初九：明夷于飞，垂其翼。君子于行，三日不食。有攸往，主人有言 。\n│ 《 象》曰：君子于行，义不食也。\n";
		             break;
				case 60:
				    var qq="●谦卦●： qiān\n●地山谦卦。 二人分金。\n● 【谦】者，谦让也，有功不居，故有二人分金之象。 象：天赐穷人一堆金，不争不抢两平分，彼此分得金到手，一切谋望皆遂心。 断：二人分金喜气多，谋望吉庆求财和，口舌消散疾病少，走失行人归家窝。婚姻如意，出行得地，交易合伙，无不吉利。";
				    var qq1="谦卦 地山谦 坤上艮下\n\n  上六：鸣谦，利用行师，征邑国 。\n│ 《 象》曰：鸣谦，志未得也。可用行师，征邑国也。\n六五：不富以其邻，利用侵伐，无不利 。\n│ 《 象》曰：利用侵伐，征不服也。\n六四：无不利，㧑谦 。\n│ 《 象》曰：无不利，㧑谦，不违则也。\n九三：劳谦君子，有终，吉 。\n│ 《 象》曰：劳谦君子，万民服也。\n六二：鸣谦，贞吉 。\n│ 《 象》曰：鸣谦贞吉，中心得也。\n初六：谦谦君子，用涉大川，吉 。\n│ 《 象》曰：谦谦君子，卑以自牧也。\n";
		             break;
				case 61:
				    var qq="●临卦●： lín\n●地泽临卦。 发政施仁。\n● 【临】者上临下也，坤居兑上似临民之意。故有发政施仁之象。 象：君王无道民倒悬，常想拨云见晴天，幸逢明主施仁政，重又安居乐自然。 断：发政施仁志量高，出外求财任逍遥，交易婚姻大有意，走失行人有音消。口舌消散，疾病见痊，求名如意，家宅平安。";
				    var qq1="临卦 地泽临 坤上兑下\n\n  上六：敦临，吉，无咎 。\n│ 《 象》曰：敦临之吉，志在内也。\n六五：知临，大君之宜，吉 。\n│ 《 象》曰：大君之宜，行中之谓也。\n六四：至临，无咎 。\n│ 《 象》曰：至临无咎，位当也。\n六三：甘临，无攸利。既忧之，无咎 。\n│ 《 象》曰：甘临，位不当也。既忧之，咎不长也。\n九二：咸临，吉，无不利 。\n│ 《 象》曰：咸临，吉，无不利，未顺命也。\n初九：咸临，贞吉 。\n│ 《 象》曰：咸临 贞吉，志行正也。\n";
		             break;
				case 62:
				    var qq="●师卦●： shī\n●地水师卦。 马到成功。 \n●【师】者，其众也，战无不克也。故有马到成功之象。如同一位将军，奉命征伐贼寇，闯进营去，大获全胜。占此卦，诸事成功之兆。 象：将军奉旨去出征，骑着大马拉硬弓，百步穿扬射得准，箭落金钱喜气生。 断：马到成功喜气生，求名取利大吉昌，婚姻合伙无妨碍，交易出行也顺当。疾病大好，走失能找，行人来信，事事凑巧。";
				    var qq1="师卦 地水师 坤上坎下\n\n  上六：大君有命，开国承家，小人勿用 。\n│ 《 象》曰：大君有命，以正功也。小人勿用，必乱邦也。\n六五：田有禽，利执；言，无咎。长子帅师，弟子舆尸，贞凶 。\n│ 《 象》曰：长子帅师，以中行也。弟子舆师，使不当也。\n六四：师左次，无咎 。\n│ 《 象》曰：左次无咎，未失常也。\n六三：师或舆尸，凶 。\n│ 《 象》曰：师或舆尸，大无功也。\n九二：在师，中吉，无咎，王三锡命 。\n│ 《 象》曰：在师中吉，承天宠也。王三锡命，怀万邦也。\n初六：师出以律，否臧凶 。\n│ 《 象》曰：师出以律， 失律凶也。\n";
		             break;
				case 63:
				    var qq="●覆卦●： fù\n●地雷覆卦。 夫妻反目。\n● 【覆】者，反也。反复不定。故有夫妻反目之象。 象：马氏太公不相合，进入家庭犹疑多，因人无义反为怨，是非平地起风波。 断：夫妻反目不顺情，卦占谋望未有成，官司惊恐财帛散，若问家宅不安宁。目下不吉，心事不足，交节换月，自然安宁。";
				    var qq1="复卦 地雷复 坤上震下\n\n  上六：迷复，凶，有灾眚。用行师，终有大败，以其国君凶，至于十年，不克征 。\n│ 《 象》曰：迷复之凶，反君道也。\n六五：敦复，无悔 。\n│ 《 象》曰：敦复无悔，中以自考也。\n六四：中行独复 。\n│ 《 象》曰：中行独复，以从道也。\n六三：频复，厉，无咎 。\n│ 《 象》曰：频复之厉，义无咎也。\n六二：休复，吉 。\n│ 《 象》曰：休复之吉，以下仁也。\n初九：不远复，无祗悔，元吉 。\n│ 《 象》曰：不远之复，以修身也。\n";
		             break;
				case 64:
				    var qq="●坤卦●： kūn\n●坤为地卦。 饿虎得食。 \n●【坤】者，顺也。内外纯阴共柔顺，故有饿虎得食之象。 象：肥羊一群入山冈，饿虎喜之把口张，适物充饥肠心欢，卦逢坤顺大吉昌。 断：饿虎得食喜气欢，求名应试主高迁，出门吉利行人到，是非口舌不相干。寻人得见，走失有信，疾病见好，凡事皆顺。";
				    var qq1="坤卦 坤为地 坤上坤下\n\n  上六：龙战于野，其血玄黄 。\n│ 《 象》曰：龙战于野，其道穷也。\n六五：黄裳，元吉 。\n│ 《 象》曰：黄裳元吉，文在中也。\n六四：括囊，无咎无誉 。\n│ 《 象》曰：括囊无咎，慎不害也。\n六三：含章可贞。或从王事，无成有终 。\n│ 《 象》曰：含章可贞；以时发也。或从王事，知光大也。\n六二：直方大，不习，无不利 。\n│ 《 象》曰：六二之动，直以方也。不习，无不利，地道光也。\n初六：履霜，坚冰至 。\n│ 《 象》曰：履霜坚冰，阴始凝也。驯致其道，至坚冰也。\n用六：利永贞 。\n│ 《 象》曰：用六永贞，以大终也。\n";
		             break;
		     }
        result.textContent = ` ${qq}`;
		result1.textContent = ` ${qq1}`;
    });
});

function goBack() {
	var audio = document.getElementById("audio");
	    audio.play();
	setTimeout(function() {
	        // 延迟0.2秒后执行跳转操作
	        window.history.back(); // 替换为你要跳转的页面地址
	    }, 200); // 1000毫秒等于1秒
	
    
}


function nothing() {
	var audio = document.getElementById("audio1");
	    audio.play();
}

function goToNewPage4() {
	var audio = document.getElementById("audio");
	    audio.play();
    setTimeout(function() {
            // 延迟0.2秒后执行跳转操作
            window.location.href = "book1.html"; // 替换为你要跳转的页面地址
        }, 200); // 1000毫秒等于1秒
    
}

function goToNewPage5() {
	var audio = document.getElementById("audio");
	    audio.play();
    setTimeout(function() {
            // 延迟0.2秒后执行跳转操作
            window.location.href = "book2.html"; // 替换为你要跳转的页面地址
        }, 200); // 1000毫秒等于1秒
    
}

function goToNewPage6() {
	var audio = document.getElementById("audio");
	    audio.play();
    setTimeout(function() {
            // 延迟0.2秒后执行跳转操作
            window.location.href = "book3.html"; // 替换为你要跳转的页面地址
        }, 200); // 1000毫秒等于1秒
    
}