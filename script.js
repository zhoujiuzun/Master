function getSystemTime() {
    const now = new Date();
    
    const systemTimeElement = document.getElementById("system-time");
    systemTimeElement.textContent = "当前时间：" + now.toLocaleString();
    const lunarDate = getLunarDate(now);
    
    const lunarDateElement = document.getElementById("lunar-date");
    lunarDateElement.textContent = "农历日期：" + lunarDate;
}

function accelerateRotation() {
   let button = document.querySelector('.rotate-button');
   let animation = button.style.animation || 'rotateAnimation';
   let currentSpeed = parseFloat(button.style.animationDuration) || 1;

   // 加速旋转，每次点击减少动画持续时间
   currentSpeed -= 0.2; // 可以根据需要调整加速度

   button.style.animation = animation + ' ' + currentSpeed + 's infinite';
}

const button = document.querySelector('button');
button.addEventListener('click', function() {
	var audio = document.getElementById("audio");
	    audio.play();
    button.classList.remove('animate');
    void button.offsetWidth;
    button.classList.add('animate');
});

function nothing() {
	var audio = document.getElementById("audio");
	    audio.play();
}

function goToNewPage() {
	var audio = document.getElementById("audio");
	    audio.play();
	setTimeout(function() {
	        // 延迟0.2秒后执行跳转操作
	        window.location.href = "book0.html"; // 替换为你要跳转的页面地址
	    }, 200); // 1000毫秒等于1秒
    
}

function goToNewPage0() {
	var audio = document.getElementById("audio");
	    audio.play();
    setTimeout(function() {
            // 延迟0.2秒后执行跳转操作
            window.location.href = "xiaoliuren.html"; // 替换为你要跳转的页面地址
        }, 200); // 1000毫秒等于1秒
    
}

function goToNewPage1() {
	var audio = document.getElementById("audio");
	    audio.play();
    setTimeout(function() {
            // 延迟0.2秒后执行跳转操作
            window.location.href = "number.html"; // 替换为你要跳转的页面地址
        }, 200); // 1000毫秒等于1秒
    
}

function goToNewPage2() {
	var audio = document.getElementById("audio");
	    audio.play();
    setTimeout(function() {
            // 延迟0.2秒后执行跳转操作
            window.location.href = "book.html"; // 替换为你要跳转的页面地址
        }, 200); // 1000毫秒等于1秒
    
}

function goToNewPage3() {
	var audio = document.getElementById("audio");
	    audio.play();
    setTimeout(function() {
            // 延迟0.2秒后执行跳转操作
            window.location.href = "dictionary.html"; // 替换为你要跳转的页面地址
        }, 200); // 1000毫秒等于1秒
    
}

function goBack() {
	var audio = document.getElementById("audio");
	    audio.play();
	setTimeout(function() {
	        // 延迟0.2秒后执行跳转操作
	        window.history.back(); // 替换为你要跳转的页面地址
	    }, 200); // 1000毫秒等于1秒
	
    
}

function calculateSum() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const num3 = parseInt(document.getElementById("num3").value);
    var audio = document.getElementById("audio");
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 <= 0 || num2 <= 0 || num3 <= 0 || num1 > 9 || num2 > 9 || num3 > 9) {
        document.getElementById("result").textContent = "请输入有效的大于0的一位数字！";
        return;
    }

    const sum = num1 + num2 + num3-2;
    
    	    audio.play();
   switch (sum % 6) {
            case 1:
                var qq=" ● 大安\n│ ● 身不动时\n│ ● 五行属木\n│ ● 方位东\n│ ● 青龙\n│ ● 数字：1,5,7\n│ ● 有静止、心安、吉祥之意\n│ ● 口诀：大安事事昌，求谋在东方，失物去不远，宅舍保平安，行人身未动，病者主无妨，将军回田野，仔细更推详";
                break;
            case 2:
                var qq="● 留连\n│ ● 人未归时\n│ ● 五行属水\n│ ● 颜色为黑\n│ ● 方位北\n│ ● 玄武\n│ ● 数字：2,8,10\n│ ● 有暗昧不明、延迟、纠缠、拖延、漫长之意\n│ ● 口诀：留连事难成，求谋日未明，官事凡宜缓，去者未回程，失物南方见，急讨方心称，更须防口舌，人口且平平。";
                break;
            case 3:
                var qq="● 速喜\n│ ● 人即至时\n│ ● 五行属火\n│ ● 红色\n│ ● 南方\n│ ● 数字：3,6,9\n│ ● 有快速、吉利、时机已到之意\n│ ● 口诀：速喜喜来临，求财向南行，失物申未午（南、西南），逢人路上寻，官事有福德，病者无祸侵，田宅六畜吉，行人有信音。";
                break;
            case 4:
                var qq="● 赤口\n│ ● 官事凶时\n│ ● 五行属金\n│ ● 白色\n│ ● 西方\n│ ● 白虎\n│ ● 数字：4,7,10\n│ ● 有不吉、惊恐、凶险、口舌是非之意\n│ ● 口诀：赤口主口舌，官非切宜防，失物急去寻，行人有惊慌，鸡犬（六畜）多作怪，病者出西方，更须防咀咒，诚恐染瘟皇。";
                break;
            case 5:
                var qq="● 小吉\n│ ● 人来喜时\n│ ● 五行属木\n│ ● 六合\n│ ● 数字：1,5,7。\n│ ● 有和合、吉利之意\n│ ● 口诀：小吉最吉昌，路上好商量，阴人来报喜，失物在坤方（西南），行人即便至，交易甚是强，凡事皆和合，病者祈上苍。";
                break;
            default:
                var qq="● 空亡\n│ ● 音信稀时\n│ ● 五行属土\n│ ● 黄色\n│ ● 中央\n│ ● 勾陈\n│ ● 数字：3,6,9\n│ ● 有不吉、无果之意\n│ ● 口诀：空亡事不祥，阴人多乖张，求财无利益，行人有灾殃，失物寻一见，官事有刑伤，病人逢暗鬼，祈解保安康。"; // 输出temp
        }
   		
		setTimeout(function() {
		        // 延迟0.2秒后执行跳转操作
		        document.getElementById("result").textContent = `${qq}`; // 替换为你要跳转的页面地址
		    }, 200); // 1000毫秒等于1秒
    
}

function getLunarDate(date) {
    tempday=0;
    tempmonth=0;
    var nyear;
    var nmonth;
    var nday = -1;
    var nwday;
    var nhrs;
    var nmin;
    var nsec;
    var newDate = newDate;
 
    var lmonth, lday, lleap; //农历参数
    
    function Draw() {
        NewTick();
 
        //显示时间
        var sum = tempmonth + tempday + getChineseHourNumber(nhrs)-2;
        switch (sum % 6) {
            case 1:
                var qq=" ● 大安\n│ ● 身不动时\n│ ● 五行属木\n│ ● 方位东\n│ ● 青龙\n│ ● 数字：1,5,7\n│ ● 有静止、心安、吉祥之意\n│ ● 口诀：大安事事昌，求谋在东方，失物去不远，宅舍保平安，行人身未动，病者主无妨，将军回田野，仔细更推详\n";
                break;
            case 2:
                var qq="● 留连\n│ ● 人未归时\n│ ● 五行属水\n│ ● 颜色为黑\n│ ● 方位北\n│ ● 玄武\n│ ● 数字：2,8,10\n│ ● 有暗昧不明、延迟、纠缠、拖延、漫长之意\n│ ● 口诀：留连事难成，求谋日未明，官事凡宜缓，去者未回程，失物南方见，急讨方心称，更须防口舌，人口且平平。\n";
                break;
            case 3:
                var qq="● 速喜\n│ ● 人即至时\n│ ● 五行属火\n│ ● 红色\n│ ● 南方\n│ ● 数字：3,6,9\n│ ● 有快速、吉利、时机已到之意\n│ ● 口诀：速喜喜来临，求财向南行，失物申未午（南、西南），逢人路上寻，官事有福德，病者无祸侵，田宅六畜吉，行人有信音。\n";
                break;
            case 4:
                var qq="● 赤口\n│ ● 官事凶时\n│ ● 五行属金\n│ ● 白色\n│ ● 西方\n│ ● 白虎\n│ ● 数字：4,7,10\n│ ● 有不吉、惊恐、凶险、口舌是非之意\n│ ● 口诀：赤口主口舌，官非切宜防，失物急去寻，行人有惊慌，鸡犬（六畜）多作怪，病者出西方，更须防咀咒，诚恐染瘟皇。\n";
                break;
            case 5:
                var qq="● 小吉\n│ ● 人来喜时\n│ ● 五行属木\n│ ● 六合\n│ ● 数字：1,5,7。\n│ ● 有和合、吉利之意\n│ ● 口诀：小吉最吉昌，路上好商量，阴人来报喜，失物在坤方（西南），行人即便至，交易甚是强，凡事皆和合，病者祈上苍。\n";
                break;
            default:
                var qq="● 空亡\n│ ● 音信稀时\n│ ● 五行属土\n│ ● 黄色\n│ ● 中央\n│ ● 勾陈\n│ ● 数字：3,6,9\n│ ● 有不吉、无果之意\n│ ● 口诀：空亡事不祥，阴人多乖张，求财无利益，行人有灾殃，失物寻一见，官事有刑伤，病人逢暗鬼，祈解保安康。\n"; // 输出temp
        }
        var lunar_month_day=lmonth + "月" + lday+" 时辰:"+ getShichen(nhrs)+"时\n\n"+qq;
        return lunar_month_day;
    }
    
    
    function NewTick() {
        var noww = newDate ? new Date(newDate) : new Date();
        if (noww.getDate() != nday) {
            nyear = noww.getFullYear();
            nmonth = noww.getMonth() + 1;
            nwday = noww.getDay();
            nday = noww.getDate();
 
            getlunar(); //获取农历
        }
        nhrs = noww.getHours();
        nmin = noww.getMinutes();
        nsec = noww.getSeconds();
    }
 
 
    //辅助函数
    var hzWeek = new Array("日", "一", "二", "三", "四", "五", "六", "日");
    function cweekday(wday) {
        return hzWeek[wday];
    }
    function shapetime(vhrs, vmin, vsec) {
        if (vsec <= 9) vsec = "0" + vsec;
        if (vmin <= 9) vmin = "0" + vmin;
        if (vhrs <= 9) vhrs = "0" + vhrs;
        return vhrs + ":" + vmin + ":" + vsec
    }
   // 添加获取时辰信息的函数

    function getChineseHourNumber(hour) {
        // 时辰对应关系数组
        var chineseHours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        
        // 计算时辰
        var chineseHourIndex =Math.floor(((hour+1) % 24) / 2) +1;
        
        return chineseHours[chineseHourIndex-1];
    }

  
    function getShichen(hour){
        var shichenArr = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未',                     '申', '酉', '戌', '亥'];
        
        return shichenArr[Math.floor(((hour+1) % 24) / 2) +1-1]; // 计算时辰并返回
    }

    //农历函数开始
    var lunarInfo = new Array(0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, //1990
    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, 0x14b63);
    function lYearDays(y) {
        var i, sum = 348;
        for (i = 0x8000; i > 0x8; i >>= 1) sum += (lunarInfo[y - 1900] & i) ? 1 : 0;
        return (sum + leapDays(y));
    }
    function leapDays(y) {
        if (leapMonth(y)) return ((lunarInfo[y - 1900] & 0x10000) ? 30 : 29);
        else return (0);
    }
    function leapMonth(y) {
        return (lunarInfo[y - 1900] & 0xf);
    }
    function monthDays(y, m) {
        return ((lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
    }
    function Lunar(y, m, d) {
        var i, leap = 0,
        temp = 0;
        var offset = (Date.UTC(y, m, d) - Date.UTC(1900, 0, 31)) / 86400000;
        for (i = 1900; i < 2050 && offset > 0; i++) {
            temp = lYearDays(i);
            offset -= temp;
        }
        if (offset < 0) {
            offset += temp;
            i--;
        }
        this.year = i;
        leap = leapMonth(i);
        this.isLeap = false;
        for (i = 1; i < 13 && offset > 0; i++) {
            if (leap > 0 && i == (leap + 1) && this.isLeap == false) {--i;
                this.isLeap = true;
                temp = leapDays(this.year);
            } else {
                temp = monthDays(this.year, i);
            }
            if (this.isLeap == true && i == (leap + 1)) this.isLeap = false;
            offset -= temp;
        }
        if (offset == 0 && leap > 0 && i == leap + 1) if (this.isLeap) {
            this.isLeap = false;
        } else {
            this.isLeap = true; --i;
        }
        if (offset < 0) {
            offset += temp; --i;
        }
        this.month = i;
        this.day = offset + 1;
    }
    var nStr1 = new Array('', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二');
    var nStr2 = new Array('初', '十', '廿', '卅', '□');
    function GetcDay(d) {
        var s;
        switch (d) {
        case 10:
            s = '初十';
            break;
        case 20:
            s = '二十';
            break;
        case 30:
            s = '三十';
            break;
        default:
            s = nStr2[Math.floor(d / 10)];
            s += nStr1[d % 10];
            break;
        }
      tempday=d;
        return (s);
    }
    function GetcMon(m) {tempmonth=m;
        if (m == 1) return '正';
        else return nStr1[m];
    }
    function getlunar() {
        var lObj = new Lunar(nyear, nmonth - 1, nday);
        lmonth = GetcMon(lObj.month);
        lday = GetcDay(lObj.day);
        lleap = lObj.isLeap;
        if (lleap == 1) {
            lmonth = "闰" + lmonth;
        }
    }
    //农历函数结束
    return Draw();
}
getSystemTime();
setInterval(getSystemTime, 1000); // 每秒更新一次时间显示