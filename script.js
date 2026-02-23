// 修道院テーマの施設データ (インフレを激しくする設定)
const facilityData = [
    { id: 'f1', name: '教会の古い麺棒', desc: '信者からの寄付の品。手作業で生地を伸ばす。', baseCost: 15, basePPS: 0.5, icon: '🥖' },
    { id: 'f2', name: '修道院のレンガ窯', desc: '中庭にある古いレンガ窯。薪で香ばしく焼ける。', baseCost: 150, basePPS: 5, icon: '🧱' },
    { id: 'f3', name: '祈りのパイ工房', desc: '空き部屋を改装した手作り工房。シスターたちが手伝う。', baseCost: 1800, basePPS: 40, icon: '🏠' },
    { id: 'f4', name: '聖なるチェリー農園', desc: '裏山の土地を開墾し、極上のチェリーを量産。', baseCost: 24000, basePPS: 350, icon: '🍒' },
    { id: 'f5', name: 'カラクリパイ焼き機', desc: '村の職人が作ってくれた自動装置。異端ではない。', baseCost: 360000, basePPS: 3200, icon: '⚙️' },
    { id: 'f6', name: 'パイ配送馬車', desc: '隣町や王都までチェリーパイを売り叩く。', baseCost: 6500000, basePPS: 45000, icon: '🐎' },
    { id: 'f7', name: '大聖堂のパイ工場', desc: '大聖堂を一部改築して工場ラインを新設。罰当たり？', baseCost: 150000000, basePPS: 600000, icon: '🏭' },
    { id: 'f8', name: 'パイ焼きの天使', desc: 'パイの香りに誘われて天から舞い降りた助っ人。', baseCost: 3500000000, basePPS: 8500000, icon: '👼' },
    { id: 'f9', name: '神聖パイ召喚陣', desc: '祈りの力で直接パイを空間から具現化する奇跡。', baseCost: 90000000000, basePPS: 120000000, icon: '✨' },
    { id: 'f10', name: 'チェリーパイ教国', desc: '「我々の信仰はパイにある」一つの国がパイのために動く。', baseCost: 2500000000000, basePPS: 1800000000, icon: '👑' }
];

const upgradeData = [];

// 施設ごとの倍率アップグレードを自動生成 (大量追加)
facilityData.forEach((f) => {
    // 施設一つにつき5つのアップグレード
    upgradeData.push({ id: `u_${f.id}_1`, name: `${f.name}の改修 I`, desc: `${f.name}の生産量が2倍になる`, cost: f.baseCost * 5, type: 'pps_target', target: f.id, value: 2 });
    upgradeData.push({ id: `u_${f.id}_2`, name: `${f.name}の改修 II`, desc: `${f.name}の生産量がさらに2倍になる`, cost: f.baseCost * 50, type: 'pps_target', target: f.id, value: 2 });
    upgradeData.push({ id: `u_${f.id}_3`, name: `${f.name}の極意 I`, desc: `${f.name}の生産量がさらに3倍になる`, cost: f.baseCost * 500, type: 'pps_target', target: f.id, value: 3 });
    upgradeData.push({ id: `u_${f.id}_4`, name: `${f.name}の極意 II`, desc: `${f.name}の生産量がさらに4倍になる`, cost: f.baseCost * 5000, type: 'pps_target', target: f.id, value: 4 });
    upgradeData.push({ id: `u_${f.id}_5`, name: `${f.name}の覚醒`, desc: `${f.name}の生産量がさらに5倍になる`, cost: f.baseCost * 50000, type: 'pps_target', target: f.id, value: 5 });
});

// 全体底上げ & クリックアップグレード
[
    { name: 'シスターの祈り I', type: 'pps', cost: 5000, val: 1.5, desc: '全生産量が1.5倍' },
    { name: 'シスターの祈り II', type: 'pps', cost: 50000, val: 2, desc: '全生産量が2倍' },
    { name: '修道院の評判 I', type: 'pps', cost: 500000, val: 2, desc: '全生産量が2倍' },
    { name: '修道院の評判 II', type: 'pps', cost: 5000000, val: 2.5, desc: '全生産量が2.5倍' },
    { name: '村の特産品認定', type: 'pps', cost: 50000000, val: 3, desc: '全生産量が3倍' },
    { name: '王国御用達のパイ', type: 'pps', cost: 500000000, val: 4, desc: '全生産量が4倍' },
    { name: '世界を救うパイ', type: 'pps', cost: 10000000000, val: 5, desc: '全生産量が5倍' },

    // クリック系
    { name: '腕力トレーニング I', type: 'click_pps', cost: 1000, val: 0.01, desc: 'クリックパワーが「PPSの1%」分増加する' },
    { name: '腕力トレーニング II', type: 'click_pps', cost: 20000, val: 0.02, desc: 'クリックパワーが「PPSの2%」分追加で増加する' },
    { name: '魔力練成クリック', type: 'click_pps', cost: 500000, val: 0.05, desc: 'クリックパワーが「PPSの5%」分追加で増加する' },
    { name: '神速のパイコネ', type: 'click_pps', cost: 10000000, val: 0.1, desc: 'クリックパワーが「PPSの10%」分追加で増加する' }
].forEach((u, idx) => {
    upgradeData.push({ id: `ug_global_${idx}`, name: u.name, desc: u.desc, cost: u.cost, type: u.type, value: u.val });
});

// 実績（大量追加）
const achievementData = [];

facilityData.forEach((f) => {
    achievementData.push({ id: `a_${f.id}_10`, name: `${f.name} x10`, desc: `${f.name}を10個所有した`, icon: '🥉' });
    achievementData.push({ id: `a_${f.id}_25`, name: `${f.name} x25`, desc: `${f.name}を25個所有した`, icon: '🥈' });
    achievementData.push({ id: `a_${f.id}_50`, name: `${f.name} x50`, desc: `${f.name}を50個所有した`, icon: '🥇' });
    achievementData.push({ id: `a_${f.id}_100`, name: `${f.name}の主`, desc: `${f.name}を100個所有した`, icon: '👑' });
});

[
    { p: 1, n: "最初の一歩", i: '🥧' },
    { p: 1000, n: "評判のパイ", i: '😋' },
    { p: 100000, n: "大人気のパイ", i: '😍' },
    { p: 1000000, n: "ミリオンパイ", i: '🎉' },
    { p: 50000000, n: "パイ長者", i: '💸' },
    { p: 1000000000, n: "ビリオンパイ", i: '💎' },
    { p: 1000000000000, n: "トリリオンパイ", i: '🌌' },
    { p: 1000000000000000, n: "クアッドリリオンパイ", i: '🎇' },
    { p: 1000000000000000000, n: "クィンティリオンパイ", i: '🌟' },
].forEach(a => {
    achievementData.push({ id: `a_pies_${a.p}`, name: a.n, desc: `累計${a.p.toLocaleString()}枚のパイを焼いた`, icon: a.i, totalPies: a.p });
});
achievementData.push({ id: 'a_blonde_outfit', name: 'クレアの心を開いて', desc: 'クレアの服を開放した', icon: '💛' });
achievementData.push({ id: 'a_black_outfit', name: 'エリとの絆', desc: 'エリの服を開放した', icon: '🖤' });


const COSTUME_THRESHOLDS = [0, 100, 500];
const COSTUME_NAMES = ["シスター服", "ベールなし", "私服"];

// ゲームの状態（State）
let state = {
    pies: 0,
    totalPies: 0,
    clickMultiplier: 1,
    ppsMultiplier: 1,
    clickPPSPercentage: 0,
    buyAmount: 1,
    facilities: facilityData.map(f => ({ id: f.id, count: 0 })),
    upgrades: [],
    achievements: [],
    currentSister: 'blonde',
    sisters: {
        blonde: { affection: 0, costumeLevel: 0, selectedCostume: 0 },
        black: { affection: 0, costumeLevel: 0, selectedCostume: 0 }
    }
};

let visibleUpgrades = []; // 表示可能なアップグレードのリスト

const sistersConfig = {
    blonde: {
        name: 'クレア',
        messages: [
            "修道院の屋根を修理するには、まだまだパイが必要ですね。",
            "焼きたてのチェリーパイ、村の人たちが喜んでくれるといいな。",
            "エリと一緒に、この修道院を必ず立て直します！",
            "神様も、甘いものは好きでしょうか？",
            "粉まみれになってしまいました…ふふっ。",
            "あ、お祈りの時間でした！…でも手が離せませんね。",
            "パイの香りが村中まで届いているみたいです！",
            "今日採れたチェリーは一段と甘い気がします。",
            "焦がさないように気をつけないと…じーっ…",
            "いつか、大聖堂のように立派な修道院にしたいですね。",
            "孤児院の子供たちにも、おすそ分けに行きましょう！",
            "パイを焼く手が止まりません…これも神の導きでしょうか？",
            "クリック…いえ、生地をこね続けると、腕が鍛えられますね。",
            "あの、もっと手伝っていただけますか？",
            "借金を返すまで、弱音は吐けません！",
            "エリが横で一生懸命なところ、可愛いですよね。",
            "新しいオーブンが欲しいなんて…贅沢でしょうか。",
            "パイの売り上げで、やっと窓ガラスが直せそうです！",
            "ふう…少し休憩しませんか？なんて、冗談です！",
            "チェリーの赤色は神聖な色なんですよ。たぶん。"
        ],
        costumeMessages: {
            0: "シスター服は神聖な気持ちになりますが、粉がつきやすいですね。",
            1: "ベールを外すと、オーブンの熱が和らぎますね。",
            2: "私服でパイを焼くなんて、少し恥ずかしいですが…動きやすいですっ。"
        },
        images: ["images/blonde_0.png", "images/blonde_1.png", "images/blonde_2.png"]
    },
    black: {
        name: 'エリ',
        messages: [
            "雨漏り、早く直したいわね。パイ作り、手伝うわ。",
            "このチェリー、裏庭の木から採れたのよ。甘くて美味しいわ。",
            "修道院の借金…ふふっ、笑えなくなってきたわね。どんどん焼くわよ。",
            "パイがいっぱい売れれば、温かいスープが毎日飲めるようになるかもね。",
            "焦がさないように気をつけて。",
            "まったく、神様は私たちに試練を与えすぎじゃないかしら。",
            "ほらほら、手が止まってるわよ。借金取りが来ちゃうわ。",
            "クレアは真面目よね。私が見張ってないと無理しそうだわ。",
            "生地は休ませることも大切だけど、今は私たちが働く番ね。",
            "ちょっと味見……うん、完璧な出来栄えね！",
            "パイの中に愛と祈り、そして執念を込めているわ。",
            "王国軍に納品できれば、借金なんてすぐ返せるのに。",
            "見て、この焼き色。芸術的だと思わない？",
            "パイ作りのおかげで、二の腕が引き締まってきた気がするわ。",
            "また窯の温度が下がってる！急いで薪をくべて！",
            "パイを運ぶ馬車が足りないわね。もっと稼がないと。",
            "私が作ったパイの虜になった人が村にたくさんいるみたい。",
            "これだけ焼けば、そろそろ「パイ修道院」って呼ばれそうね。",
            "疲れたら言いなさい。私が代わってあげる。",
            "チェリーの種抜き作業、誰か代わってくれないかしら……"
        ],
        costumeMessages: {
            0: "この服、動きにくいけど…贅沢は言ってられないわね。",
            1: "少しは動きやすくなったかしら？",
            2: "ふぅ、やっぱり普段着が一番ね。さあ、夜通し焼くわよ。"
        },
        images: ["images/black_0.png", "images/black_1.png", "images/black_2.png"]
    }
};

// DOM要素のキャッシュ
const els = {
    piesCount: document.getElementById('pies-count'),
    ppsCount: document.getElementById('pps-count'),
    totalPiesCount: document.getElementById('total-pies-count'),
    sisterButton: document.getElementById('sister-button'),
    facilitiesContainer: document.getElementById('facilities-container'),
    upgradesContainer: document.getElementById('upgrades-container'),
    achievementsContainer: document.getElementById('achievements-container'),
    sisterImage: document.getElementById('sister-image'),
    affectionDisplay: document.getElementById('affection-display'),
    costumeSelect: document.getElementById('costume-select'),
    costumeProgressBar: document.getElementById('costume-progress-bar'),
    prevSister: document.getElementById('prev-sister'),
    nextSister: document.getElementById('next-sister'),
    sisterNameDisplay: document.getElementById('sister-name-display'),
    speechBubble: document.getElementById('speech-bubble'),
    speechText: document.getElementById('speech-text'),
    notificationContainer: document.getElementById('notification-container'),
    buyX1: document.getElementById('buy-x1'),
    buyX10: document.getElementById('buy-x10')
};

// ユーティリティ
const numberSuffixes = ["", "万", "億", "兆", "京", "垓"];
function formatNumber(num) {
    if (num < 10000) return Math.floor(num).toLocaleString();
    if (num >= 1e20) return num.toExponential(2); // 非常に大きい場合

    let suffixIdx = 0;
    let n = num;
    while (n >= 10000 && suffixIdx < numberSuffixes.length - 1) {
        n /= 10000;
        suffixIdx++;
    }
    return (Math.floor(n * 100) / 100).toLocaleString() + numberSuffixes[suffixIdx];
}

function notify(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    els.notificationContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// 初期化
function init() {
    if (state.sisters.blonde.selectedCostume === undefined) state.sisters.blonde.selectedCostume = 0;
    if (state.sisters.black.selectedCostume === undefined) state.sisters.black.selectedCostume = 0;

    renderFacilities();
    checkUpgradesVisibility();
    renderAchievements();
    updateSisterUI();

    // イベントリスナー
    els.sisterButton.addEventListener('click', handlePieClick);

    // シスター切り替え
    const toggleSister = () => setSister(state.currentSister === 'blonde' ? 'black' : 'blonde');
    els.prevSister.addEventListener('click', toggleSister);
    els.nextSister.addEventListener('click', toggleSister);

    els.costumeSelect.addEventListener('change', (e) => {
        state.sisters[state.currentSister].selectedCostume = parseInt(e.target.value);
        updateSisterUI();
        const sid = state.currentSister;
        const sConf = sistersConfig[sid];
        showSpeech(sConf.costumeMessages[state.sisters[sid].selectedCostume]);
    });
    els.buyX1.addEventListener('click', () => setBuyMultiplier(1));
    els.buyX10.addEventListener('click', () => setBuyMultiplier(10));

    // ゲームループ (100ms)
    setInterval(gameLoop, 100);
    // ランダムメッセージ (8秒毎)
    setInterval(showRandomMessage, 8000);
}

// FPSループ
function gameLoop() {
    let pps = calculatePPS();
    if (pps > 0) {
        let ppsTick = pps / 10;
        state.pies += ppsTick;
        state.totalPies += ppsTick;
    }
    updateUI();
    checkConditions();
}

function calculatePPS() {
    let base = 0;

    // 施設ごとの倍率を集計
    let facilityMults = {};
    facilityData.forEach(f => facilityMults[f.id] = 1);

    state.upgrades.forEach(uId => {
        const ud = upgradeData.find(u => u.id === uId);
        if (ud && ud.type === 'pps_target') {
            facilityMults[ud.target] *= ud.value;
        }
    });

    state.facilities.forEach(sf => {
        const fd = facilityData.find(f => f.id === sf.id);
        if (fd) {
            base += fd.basePPS * sf.count * facilityMults[fd.id];
        }
    });

    return base * state.ppsMultiplier;
}

function calculateClickPower() {
    let power = 1 * state.clickMultiplier;
    let pps = calculatePPS();
    if (state.clickPPSPercentage > 0) {
        power += pps * state.clickPPSPercentage;
    }
    return Math.max(1, power);
}

// UI更新系
function updateUI() {
    els.piesCount.innerText = formatNumber(state.pies);
    els.ppsCount.innerText = formatNumber(calculatePPS());
    els.totalPiesCount.innerText = formatNumber(state.totalPies);

    // 施設購入判定
    document.querySelectorAll('.facility-item').forEach(el => {
        const id = el.dataset.id;
        const sf = state.facilities.find(f => f.id === id);
        const calc = getFacilityCostAndAmount(id);

        el.querySelector('.item-count').innerText = sf.count + " / 100";

        if (calc.maxed) {
            el.querySelector('.item-cost').innerText = "MAX";
            el.classList.add('disabled');
        } else {
            el.querySelector('.item-cost').innerText = formatNumber(calc.cost) + ' パイ';
            if (state.pies >= calc.cost) {
                el.classList.remove('disabled');
            } else {
                el.classList.add('disabled');
            }
        }
    });

    // アップグレードの表示更新チェック
    if (checkUpgradesVisibility()) {
        renderUpgrades();
    }

    // アップグレード購入判定
    document.querySelectorAll('.upgrade-item').forEach(el => {
        const id = el.dataset.id;
        const ud = upgradeData.find(u => u.id === id);
        if (state.pies >= ud.cost) {
            el.classList.remove('disabled');
        } else {
            el.classList.add('disabled');
        }
    });
}

function getFacilityCostAndAmount(id) {
    const fd = facilityData.find(f => f.id === id);
    const sf = state.facilities.find(f => f.id === id);

    let toBuy = state.buyAmount;
    if (sf.count + toBuy > 100) {
        toBuy = 100 - sf.count;
    }
    if (toBuy <= 0) return { cost: 0, amount: 0, maxed: true };

    let cost = 0;
    for (let i = 0; i < toBuy; i++) {
        cost += Math.floor(fd.baseCost * Math.pow(1.15, sf.count + i));
    }
    return { cost, amount: toBuy, maxed: false };
}

function setBuyMultiplier(amount) {
    state.buyAmount = amount;
    els.buyX1.classList.toggle('active', amount === 1);
    els.buyX10.classList.toggle('active', amount === 10);
    updateUI();
}

// 施設・アップグレードのレンダリング
function renderFacilities() {
    els.facilitiesContainer.innerHTML = '';
    facilityData.forEach(fd => {
        const sf = state.facilities.find(f => f.id === fd.id);
        const calc = getFacilityCostAndAmount(fd.id);

        const div = document.createElement('div');
        div.className = 'buy-item facility-item disabled';
        div.dataset.id = fd.id;
        div.innerHTML = `
            <div class="achievement-icon">${fd.icon}</div>
            <div class="item-info">
                <h4>${fd.name}</h4>
                <p style="font-size: 0.75rem;">${fd.desc}</p>
            </div>
            <div class="item-cost">${calc.maxed ? "MAX" : formatNumber(calc.cost) + " パイ"}</div>
            <div class="item-count">${sf.count} / 100</div>
        `;
        div.addEventListener('click', () => buyFacility(fd.id));
        els.facilitiesContainer.appendChild(div);
    });
}

// 購入可能になりそうなアップグレードを表示リストに追加する
function checkUpgradesVisibility() {
    let changed = false;
    upgradeData.forEach(ud => {
        if (!state.upgrades.includes(ud.id) && !visibleUpgrades.includes(ud.id)) {
            // コストの10%まで到達したらリストアップ
            if (state.totalPies >= ud.cost * 0.1) {
                visibleUpgrades.push(ud.id);
                changed = true;
            }
        }
    });
    return changed;
}

function renderUpgrades() {
    els.upgradesContainer.innerHTML = '';

    // 表示上限4個
    let renderedCount = 0;
    // コストが低い順にソートして表示
    const sortedVisibles = [...visibleUpgrades]
        .filter(id => !state.upgrades.includes(id))
        .map(id => upgradeData.find(u => u.id === id))
        .sort((a, b) => a.cost - b.cost);

    sortedVisibles.forEach(ud => {
        if (renderedCount >= 4) return; // 制限

        const div = document.createElement('div');
        div.className = 'buy-item upgrade-item disabled';
        div.dataset.id = ud.id;
        div.innerHTML = `
            <div class="item-info">
                <h4>${ud.name}</h4>
                <p>${ud.desc}</p>
            </div>
            <div class="item-cost">${formatNumber(ud.cost)} パイ</div>
        `;
        div.addEventListener('click', () => buyUpgrade(ud.id));
        els.upgradesContainer.appendChild(div);
        renderedCount++;
    });
}

function renderAchievements() {
    els.achievementsContainer.innerHTML = '';

    // 実績は大量にあるため、解除済みのものを中心に表示し、未解除はグレーアウトで一部表示など
    // 今回は全実績をDOMに入れると重いので、解除済みだけ表示するリストにするか、全て入れる。
    // 「実績： x / total」の表記を追加
    let unlockedCount = state.achievements.length;

    const countHeader = document.createElement('p');
    countHeader.style.textAlign = 'right';
    countHeader.style.margin = '0 0 10px 0';
    countHeader.innerText = `実績解除率: ${unlockedCount} / ${achievementData.length}`;
    els.achievementsContainer.appendChild(countHeader);

    const unlockedList = state.achievements.slice().reverse().map(id => achievementData.find(a => a.id === id));
    const lockedList = achievementData.filter(ad => !state.achievements.includes(ad.id));

    const combined = [...unlockedList, ...lockedList];

    combined.forEach(ad => {
        if (!ad) return;
        const isUnlocked = state.achievements.includes(ad.id);
        const div = document.createElement('div');
        div.className = `achievement-item ${isUnlocked ? 'unlocked' : ''}`;
        div.id = `ach-${ad.id}`;
        div.innerHTML = `
            <div class="achievement-icon">${isUnlocked ? ad.icon : '❓'}</div>
            <div class="achievement-text">
                <h4>${isUnlocked ? ad.name : '???'}</h4>
                <p>${isUnlocked ? ad.desc : '未達成'}</p>
            </div>
        `;
        els.achievementsContainer.appendChild(div);
    });
}

// アクション系
function buyFacility(id) {
    const calc = getFacilityCostAndAmount(id);
    if (calc.maxed) return;

    if (state.pies >= calc.cost) {
        state.pies -= calc.cost;
        const sf = state.facilities.find(f => f.id === id);
        sf.count += calc.amount;
        updateUI();
    }
}

function buyUpgrade(id) {
    if (state.upgrades.includes(id)) return;
    const ud = upgradeData.find(u => u.id === id);
    if (!ud || state.pies < ud.cost) return;

    state.pies -= ud.cost;
    state.upgrades.push(id);

    // 効果適用
    if (ud.type === 'click') {
        state.clickMultiplier *= ud.value;
    } else if (ud.type === 'pps') {
        state.ppsMultiplier *= ud.value;
    } else if (ud.type === 'click_pps') {
        state.clickPPSPercentage += ud.value;
    }

    notify(`アップグレード購入：${ud.name}`);

    // visible リストから除外
    visibleUpgrades = visibleUpgrades.filter(vId => vId !== id);

    renderUpgrades();
    updateUI();
}

function handlePieClick(e) {
    const power = calculateClickPower();
    state.pies += power;
    state.totalPies += power;

    // 好感度アップ
    const sState = state.sisters[state.currentSister];
    sState.affection += 1;
    updateSisterUI();
    updateUI();

    // フローティングテキスト
    showClickNumber(e, power);
}

function showClickNumber(e, amount) {
    const rect = els.sisterButton.getBoundingClientRect();
    const x = e.clientX || (rect.left + rect.width / 2);
    const y = e.clientY || (rect.top + rect.height / 2);

    const txt = document.createElement('div');
    txt.className = 'click-number';
    txt.innerText = '+' + formatNumber(amount);

    // 散らばり効果
    const rx = (Math.random() - 0.5) * 40;
    const ry = (Math.random() - 0.5) * 20;
    txt.style.left = (x + rx) + 'px';
    txt.style.top = (y + ry) + 'px';

    document.body.appendChild(txt);
    setTimeout(() => txt.remove(), 1000);
}

// シスター系
function setSister(id) {
    state.currentSister = id;

    // 会話リセット
    els.speechBubble.classList.add('hidden');

    updateSisterUI();
}

function updateSisterUI() {
    const sid = state.currentSister;
    const sState = state.sisters[sid];
    const sConf = sistersConfig[sid];

    els.sisterNameDisplay.innerText = sConf.name;

    let newLevel = 0;
    if (sState.affection >= COSTUME_THRESHOLDS[2]) newLevel = 2;
    else if (sState.affection >= COSTUME_THRESHOLDS[1]) newLevel = 1;

    if (newLevel > sState.costumeLevel) {
        sState.costumeLevel = newLevel;
        sState.selectedCostume = newLevel;
        notify(`${sConf.name} の「${COSTUME_NAMES[newLevel]}」が開放されました！`);
        showSpeech(sConf.costumeMessages[newLevel]);
    }

    // セレクトボックスの更新
    els.costumeSelect.innerHTML = '';
    for (let i = 0; i <= sState.costumeLevel; i++) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.innerText = COSTUME_NAMES[i];
        if (i === sState.selectedCostume) {
            opt.selected = true;
        }
        els.costumeSelect.appendChild(opt);
    }

    // プログレスバー
    let nextThreshold = COSTUME_THRESHOLDS[sState.costumeLevel + 1] || sState.affection;
    let prevThreshold = COSTUME_THRESHOLDS[sState.costumeLevel];
    let progress = 0;

    if (sState.costumeLevel >= 2) {
        progress = 100;
        nextThreshold = COSTUME_THRESHOLDS[2];
    } else {
        progress = (sState.affection - prevThreshold) / (nextThreshold - prevThreshold) * 100;
    }

    if (sState.costumeLevel < 2) {
        els.affectionDisplay.innerText = `${sState.affection} / ${nextThreshold}`;
    } else {
        els.affectionDisplay.innerText = `${sState.affection}`;
    }

    els.costumeProgressBar.style.width = `${Math.min(100, progress)}%`;

    // 画像差し替え（選択されている衣装）
    const currentImgUrl = sConf.images[sState.selectedCostume || 0];
    els.sisterImage.src = currentImgUrl;
    els.sisterImage.className = '';
}

function showRandomMessage() {
    if (Math.random() > 0.4) return;

    const sid = state.currentSister;
    const sConf = sistersConfig[sid];
    const msgs = sConf.messages;
    const msg = msgs[Math.floor(Math.random() * msgs.length)];

    showSpeech(msg);
}

function showSpeech(text) {
    els.speechText.innerText = text;
    els.speechBubble.classList.remove('hidden');

    clearTimeout(window.speechTimeout);
    window.speechTimeout = setTimeout(() => {
        els.speechBubble.classList.add('hidden');
    }, 4000);
}

// 条件チェック (実績解禁など)
function checkConditions() {
    facilityData.forEach(f => {
        const sf = state.facilities.find(s => s.id === f.id);
        if (!sf) return;
        if (sf.count >= 10) triggerAch(`a_${f.id}_10`);
        if (sf.count >= 25) triggerAch(`a_${f.id}_25`);
        if (sf.count >= 50) triggerAch(`a_${f.id}_50`);
        if (sf.count >= 100) triggerAch(`a_${f.id}_100`);
    });

    achievementData.forEach(ad => {
        if (ad.totalPies && state.totalPies >= ad.totalPies) triggerAch(ad.id);
    });

    if (state.sisters.blonde.costumeLevel >= 1) triggerAch('a_blonde_outfit');
    if (state.sisters.black.costumeLevel >= 1) triggerAch('a_black_outfit');
}

function triggerAch(id) {
    if (!state.achievements.includes(id)) {
        state.achievements.push(id);
        const ad = achievementData.find(a => a.id === id);
        if (ad) {
            notify(`🏆 実績解除：${ad.name}`);

            // DOMの部分更新
            const el = document.getElementById(`ach-${id}`);
            if (el) {
                el.classList.add('unlocked');
                el.querySelector('.achievement-icon').innerText = ad.icon;
                el.querySelector('.achievement-text h4').innerText = ad.name;
                el.querySelector('.achievement-text p').innerText = ad.desc;
            } else {
                // UI上無ければ再レンダリング
                renderAchievements();
            }

            // 解除数を更新
            const header = els.achievementsContainer.querySelector('p');
            if (header) {
                header.innerText = `実績解除率: ${state.achievements.length} / ${achievementData.length}`;
            }
        }
    }
}

// 起動
init();
