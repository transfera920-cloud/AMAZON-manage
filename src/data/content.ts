export interface NavItem {
  no: string;
  id: string;
  title: string;
}

export interface MythFactItem {
  text: string;
}

export interface ScaleTableItem {
  scale: string;
  advantages: string;
  risks: string;
  focus: string;
}

export interface FactorItem {
  name: string;
  desc: string;
}

export interface AdvantageItem {
  id: string;
  title: string;
  items: string[];
  note?: string;
}

export interface ChallengeItem {
  title: string;
  problem: string[];
  manage: string[];
}

export interface FormationSection {
  segment: string;
  tone: 'primary' | 'alpine' | 'accent';
  roles: string[];
  notes: string[];
}

export interface DecisionTreeItem {
  question: string;
  action: string;
}

export interface CaseStudyQA {
  q: string;
  a: string;
}

export const SITE_METADATA = {
  title: '登山隊伍管理與安全決策｜亞馬遜國家山岳協會',
  description: '登山領隊訓練教材：從隊伍規模評估、隊伍編排、角色分工到風險管理與緊急應變，透過比較表、流程圖、決策樹與案例分析，建立領隊面對問題時的判斷與決策能力。隊伍安全不是人數問題，而是管理能力問題。',
  canonicalUrl: 'https://amazon-hike.com/chapter21/',
  ogImageUrl: 'https://amazon-hike.com/chapter21/og.jpg',
  brandName: '亞馬遜國家山岳協會',
  brandUrl: 'https://amazon-hike.com/',
  introUrl: 'https://amazon-hike.com/intro',
  seriesName: 'LEADER TRAINING · 登山安全教育系列',
  datePublished: '2026-09-30T00:00:00+08:00',
  dateModified: '2026-09-30T00:00:00+08:00',
  lastmod: '2026-09-30',
};

export const NAV_ITEMS: NavItem[] = [
  { no: '01', id: 'ch01', title: '隊伍規模安全迷思' },
  { no: '02', id: 'ch02', title: '隊伍規模評估' },
  { no: '03', id: 'ch03', title: '大型隊伍的安全優勢' },
  { no: '04', id: 'ch04', title: '大型隊伍管理挑戰' },
  { no: '05', id: 'ch05', title: '隊伍編排原則' },
  { no: '06', id: 'ch06', title: '隊伍動態管理' },
  { no: '07', id: 'ch07', title: '領隊決策模型' },
  { no: '08', id: 'ch08', title: '案例分析' },
  { no: '09', id: 'ch09', title: '領隊自我檢核' },
  { no: '10', id: 'ch10', title: '核心理念' },
];

export const HERO_CONTENT = {
  kicker: 'LEADER TRAINING · 登山安全教育系列',
  badges: ['領隊訓練教材', '隊伍管理 · 風險決策'],
  brand: '亞馬遜國家山岳協會',
  h1: '登山隊伍管理與安全決策',
  subtitle: '隊伍安全不是人數問題，而是管理能力問題。',
  description: '從隊伍規模、隊伍編排到風險管理，建立完整的領隊決策思維。',
  imageAlt: '高山稜線上保持隊形前進的多人登山隊伍，領隊回頭確認後方隊員',
};

export const CH01_CONTENT = {
  no: '01',
  id: 'ch01',
  title: '隊伍規模安全迷思',
  lead: '人數不是安全指標，管理才是。',
  myths: [
    '✕ 人越多一定越安全',
    '✕ 人越少一定越安全',
    '✕ 拆隊一定危險',
  ],
  facts: [
    '✔ 不同規模有不同風險',
    '✔ 安全取決於管理能力',
    '✔ 分流可以是一種風險管理工具',
  ],
  tableCaption: '隊伍規模風險與優勢比較表',
  tableHeaders: ['隊伍規模', '主要優勢', '主要風險', '管理重點'],
  scales: [
    {
      scale: '小隊伍（2–5）',
      advantages: '機動、決策快、隊形短',
      risks: '資源不足、傷病無人替換',
      focus: '強化裝備冗餘與外部支援',
    },
    {
      scale: '中隊伍（6–12）',
      advantages: '分工可行、仍可控管',
      risks: '角色未定即失序',
      focus: '明確分工與集合制度',
    },
    {
      scale: '大隊伍（13 以上）',
      advantages: '人力、醫療、物資厚實',
      risks: '隊伍拉長、決策分歧、通過瓶頸',
      focus: '分組管理、隊距控制、分流方案',
    },
  ],
  core: '隊伍安全，不取決於人數，而取決於是否能管理人數。',
};

export const CH02_CONTENT = {
  no: '02',
  id: 'ch02',
  title: '隊伍規模評估',
  lead: '隊伍規模沒有固定答案，只有是否可被管理。',
  factors: [
    { name: '路線難度', desc: '路線難度，不是決定隊伍管理難度的唯一因素。' },
    { name: '行程天數', desc: '天數增加，補給與疲勞管理難度上升。' },
    { name: '地形技術性', desc: '需確保每人都能安全通過技術段。' },
    { name: '隊員能力差異', desc: '差異越大，所需角色與分流方案越多。' },
    { name: '領隊經驗', desc: '領隊能力是隊伍規模的實際上限。' },
    { name: '支援能力', desc: '副手、壓隊、醫療、通訊是否齊備。' },
    { name: '緊急應變需求', desc: '撤退、後送所需人力是否留有餘裕。' },
  ],
  steps: [
    '確認路線難度與地形技術性',
    '盤點隊員能力與身體狀況',
    '計算所需角色數（前導／壓隊／導航／醫療／通訊）',
    '評估領隊可實際掌控的人數上限',
    '決定隊伍規模與是否分組',
  ],
  core: '適合的隊伍規模，是領隊能有效管理的規模。',
};

export const CH03_CONTENT = {
  no: '03',
  id: 'ch03',
  title: '大型隊伍可能帶來的安全優勢',
  lead: '優勢不會自動發生，必須透過制度轉化為能力。',
  advantages: [
    {
      id: '01',
      title: '人力支援能力',
      items: ['受傷協助', '陪同照護', '緊急分工', '搬運支援'],
    },
    {
      id: '02',
      title: '多人觀察能力',
      items: ['疲勞徵兆', '行為改變', '裝備異常', '身體狀況'],
    },
    {
      id: '03',
      title: '路線確認能力',
      items: ['地圖確認', 'GPS 交叉比對', '地形觀察'],
      note: '人多不會自動防止迷路，必須建立導航制度。',
    },
    {
      id: '04',
      title: '視線連續管理',
      items: ['前方有人', '後方有人', '避免脫隊'],
    },
    {
      id: '05',
      title: '專長與經驗互補',
      items: ['導航', '氣象判讀', '山域經驗', '裝備能力', '急救能力'],
    },
    {
      id: '06',
      title: '醫療支援能力',
      items: ['扭傷', '抽筋', '失溫', '高山症狀況'],
    },
    {
      id: '07',
      title: '裝備與物資備援',
      items: ['備用電池', '備用裝備', '維修工具', '保暖用品'],
    },
    {
      id: '08',
      title: '食物與能源調度',
      items: ['糧食彈性', '飲水調度', '燃料備援'],
    },
  ],
};

export const CH04_CONTENT = {
  no: '04',
  id: 'ch04',
  title: '大型隊伍管理挑戰',
  lead: '每一項挑戰都有對應的管理手段。',
  challenges: [
    {
      title: '意見與決策管理',
      problem: ['經驗不同', '能力不同', '風險接受程度不同'],
      manage: ['行前共識', '明確決策權', '撤退條件'],
    },
    {
      title: '隊伍長度管理',
      problem: ['隊伍拉長', '降低視線連結', '增加等待'],
      manage: ['控制隊距', '固定集合點', '定期確認'],
    },
    {
      title: '地形通過效率',
      problem: ['狹窄路段', '技術地形', '瓶頸區域'],
      manage: ['預留時間', '評估通過效率', '避免時間壓力'],
    },
    {
      title: '資源管理',
      problem: ['裝備分散', '食物不均', '醫療集中於少數人'],
      manage: ['裝備清點', '物資分配', '醫療分散配置', '分配協調負責人'],
    },
  ],
};

export const CH05_CONTENT = {
  no: '05',
  id: 'ch05',
  title: '隊伍編排原則',
  lead: '人數相同，編排不同，安全也會不同。',
  formationMap: [
    {
      segment: '前段',
      tone: 'primary' as const,
      roles: ['領隊／前導', '導航', '支援'],
      notes: ['配速穩定', '熟悉路線', '不脫離隊伍視線'],
    },
    {
      segment: '中段',
      tone: 'alpine' as const,
      roles: ['一般隊員', '需要照顧者', '中段協助'],
      notes: ['首登者置於此', '醫療支援鄰近', '隨時可被觀察'],
    },
    {
      segment: '後段',
      tone: 'accent' as const,
      roles: ['壓隊', '通訊', '支援'],
      notes: ['絕不超越', '協助落後隊員', '確認無人遺留'],
    },
  ],
  sightPrinciple: '視線連結原則：每位隊員前方有人、後方有人。任一節點斷線，即代表隊伍已失去管理。',
  rolesTitle: '角色分工',
  roles: [
    '領隊',
    '前導（依需要）',
    '中段協助',
    '壓隊',
    '導航支援',
    '醫療支援',
    '通訊支援',
  ],
  sortingWarningTitle: '重要提醒「隊伍編排不能只依體力排序」',
  sortingFactors: ['體能', '經驗', '技術能力', '身體狀況', '團隊互補'],
  core: '合理的隊伍編排，比單純控制人數更能提升安全。',
};

export const CH06_CONTENT = {
  no: '06',
  id: 'ch06',
  title: '隊伍動態管理',
  lead: '隊伍不是固定排列，而是需要隨情況調整。',
  triggers: ['支線行程', '能力差異', '抽筋／傷病', '摸黑', '天候變化', '撤退需求'],
  methods: ['計畫性分流', '臨時分流', '陪同撤退', '隊伍重組'],
  mustHaves: ['明確計畫', '指定負責人', '通訊方式', '集合時間', '集合地點', '緊急方案'],
  steps: [
    '發現狀況：能力差異／傷病／天候／時間落後',
    '判斷是否需要調整隊伍',
    '選擇方式：分流、陪同撤退或重組',
    '指定各組負責人與通訊方式',
    '約定集合時間、地點與逾時處置',
    '全隊複誦確認後執行',
    '回合後清點人數並重新評估行程',
  ],
};

export const CH07_CONTENT = {
  no: '07',
  id: 'ch07',
  title: '領隊決策模型',
  lead: '固定順序的決策流程，避免臨場遺漏。',
  steps: [
    '評估路線',
    '評估隊員能力',
    '評估隊伍規模',
    '安排角色分工',
    '建立隊伍編排',
    '建立分流方案',
    '確認緊急應變',
  ],
  tableCaption: '領隊決策節點與調整處置表',
  tableHeaders: ['決策節點', '若答案為否，該怎麼做'],
  decisionTree: [
    {
      question: '路線難度是否可被全隊承受？',
      action: '調整路線或篩選隊員',
    },
    {
      question: '每位隊員能力是否已掌握？',
      action: '行前面談、增加行前訓練',
    },
    {
      question: '規模是否在可管理範圍？',
      action: '縮減人數或分組管理',
    },
    {
      question: '關鍵角色是否齊備？',
      action: '補足壓隊、導航、醫療、通訊',
    },
    {
      question: '分流方案是否明確？',
      action: '先不分流，維持完整隊伍',
    },
    {
      question: '緊急應變是否可執行？',
      action: '延期或改變行程',
    },
  ],
  principle: '決策原則：任何一個節點無法通過，就回到上一層調整，而不是往前硬走。',
};

export const CH08_CONTENT = {
  no: '08',
  id: 'ch08',
  title: '案例分析',
  lead: '情境判斷：先做決定，再看建議答案。',
  scenarioTitle: '15 人隊伍',
  scenarioItems: [
    '4 人速度較快',
    '3 人第一次百岳',
    '2 人已走過支線',
    '1 人體能較弱',
    '其餘 5 人一般隊員',
  ],
  hint: '先自行判斷，再展開建議答案。判斷過程比答案更重要。',
  qaList: [
    {
      q: '是否需要分流？',
      a: '需要，且應為「計畫性分流」。4 位速度較快者與 2 位走過支線者可組成支線隊；3 位首次百岳與 1 位體能較弱者留在主隊，維持穩定配速。分流不是拆散隊伍，而是把能力差異轉為可管理的兩個單位。',
    },
    {
      q: '如何編排隊伍？',
      a: '主隊 9 人：前段配速者 1 人（熟悉路線、控速不超前）；中段安排 3 位首登者與體能較弱者，領隊緊鄰其後；後段固定壓隊 1 人，不得超越。支線隊 6 人：熟悉支線者前導，1 位有經驗者壓隊。',
    },
    {
      q: '如何安排角色？',
      a: '領隊留主隊（人數多、風險高）。支線隊指定副領隊，具決策權。導航（GPS＋地圖）主隊、支線隊各 1 人；急救裝備與具急救能力者兩隊各配置 1 名；通訊由兩隊各指定 1 人持無線電並約定定時通聯。',
    },
    {
      q: '如何控制等待？',
      a: '以「時間節點」而非「地點」控制：約定支線隊回歸時間（如 13:00 前必須回到岔路口），主隊在岔路口或營地等待並保暖進食。設定折返時限，逾時即啟動未歸流程，不做無限期等待。',
    },
    {
      q: '如何降低風險？',
      a: '行前共識分流方案與撤退條件；隊距控制在前後可視範圍；每小時清點人數；體能較弱者減輕背負；明訂天候、時間、身體狀況三項撤退門檻，任一觸發即由領隊決策撤退，並指定陪同人員。',
    },
  ],
};

export const CH09_CONTENT = {
  no: '09',
  id: 'ch09',
  title: '領隊自我檢核 Checklist',
  preTripTitle: '行前',
  preTripItems: [
    '是否了解每位隊員能力？',
    '是否完成角色分工？',
    '是否指定壓隊？',
    '是否建立集合制度？',
    '是否建立失聯流程？',
    '是否建立撤退制度？',
    '是否規劃分流方案？',
  ],
  onTripTitle: '行程中',
  onTripItems: [
    '隊伍是否保持完整？',
    '是否維持視線連結？',
    '是否有人持續落後？',
    '是否需要重新編排？',
    '是否需要調整策略？',
  ],
};

export const CH10_CONTENT = {
  no: '10',
  id: 'ch10',
  title: '核心理念',
  headline: '安全不是人數問題，是管理能力問題。',
  smallTeam: {
    label: '小隊伍',
    text: '需要避免資源不足。',
  },
  largeTeam: {
    label: '大隊伍',
    text: '需要避免管理不足。',
  },
  paragraph: '真正安全的隊伍，不是人最多，也不是人最少。而是能依據路線、地形、隊員能力、時間與天候，建立最適合的隊伍規模、最合理的隊伍編排、最完善的風險管理。',
  quote: '登山不是不會遇到問題，而是在問題發生時，是否有能力辨識風險、做出判斷、採取行動，並在行程結束後反思與修正，讓每一次經驗都成為下一次更安全的基礎。',
};

export const FOOTER_CONTENT = {
  brand: '亞馬遜國家山岳協會',
  brandUrl: 'https://amazon-hike.com/',
  seriesName: '登山安全教育系列',
  courseName: '登山領隊訓練教材 · 隊伍管理與安全決策',
  introLinkText: '回到登山教育平台',
  introUrl: 'https://amazon-hike.com/intro',
};
