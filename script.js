(() => {
	const $ = (sel, root = document) => root.querySelector(sel);
	const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

	// ============================================================
	// DUMMY DATA MARKER
	// - Human-readable: titles/messages contain "[DUMMY]"
	// - Machine-readable: objects have dummy: true and IDs start with "DUMMY_"
	// - Bulk delete: remove this entire block between DUMMY_DATA_START/END
	// ============================================================
	const DUMMY_DATASET_ID = 'DUMMY_BITWEEN_DATASET_2026_01_08';
	window.__BITWEEN_DUMMY_DATASET_ID__ = DUMMY_DATASET_ID;
	window.__BITWEEN_USES_DUMMY_DATA__ = true;

	const state = {
		route: 'home',
		selectedArticleId: null,
		activeTag: '',
		activeCategory: '',
		skillFilters: new Set(),
		calView: 'month',
		reactionsToday: { like: 18, thanks: 9, comment: 24 },
	};

	const skills = [
		'動画編集',
		'ライティング',
		'マーケティング',
		'ノーコード',
		'デザイン',
		'コーディング',
		'カメラ・写真',
		'SNS運用',
	];

	// DUMMY_DATA_START
	const employees = [
		{
			id: 'DUMMY_EMP_0001',
			dummy: true,
			employeeNo: 'BW-E-0001',
			name: '佐藤',
			dept: 'IT営業部',
			deptCode: 'D-SALES-IT',
			join: '2021-04-01',
			last: '2026-01-08T09:12:00',
			coverage: 74,
			skills: ['ライティング', 'SNS運用'],
			skillCodes: ['SK-WRITE', 'SK-SNS'],
			articleType: 'text',
			wp: { userId: 101, profilePostId: 2101 },
		},
		{
			id: 'DUMMY_EMP_0002',
			dummy: true,
			employeeNo: 'BW-E-0002',
			name: '田中',
			dept: '人事部',
			deptCode: 'D-HR',
			join: '2020-10-01',
			last: '2026-01-08T08:45:00',
			coverage: 61,
			skills: ['デザイン', 'ノーコード'],
			skillCodes: ['SK-DESIGN', 'SK-NOCODE'],
			articleType: 'image',
			wp: { userId: 102, profilePostId: 2102 },
		},
		{
			id: 'DUMMY_EMP_0003',
			dummy: true,
			employeeNo: 'BW-E-0003',
			name: '鈴木',
			dept: '商材営業部',
			deptCode: 'D-SALES-PROD',
			join: '2023-04-01',
			last: '2026-01-07T22:06:00',
			coverage: 83,
			skills: ['マーケティング', 'コーディング'],
			skillCodes: ['SK-MKT', 'SK-CODE'],
			articleType: 'video',
			wp: { userId: 103, profilePostId: 2103 },
		},
		{
			id: 'DUMMY_EMP_0004',
			dummy: true,
			employeeNo: 'BW-E-0004',
			name: '高橋',
			dept: '教育',
			deptCode: 'D-EDU',
			join: '2019-04-01',
			last: '2026-01-06T18:35:00',
			coverage: 52,
			skills: ['動画編集', 'カメラ・写真'],
			skillCodes: ['SK-VIDEO', 'SK-CAMERA'],
			articleType: 'video',
			wp: { userId: 104, profilePostId: 2104 },
		},
		{
			id: 'DUMMY_EMP_0005',
			dummy: true,
			employeeNo: 'BW-E-0005',
			name: '伊藤',
			dept: 'IT営業部',
			deptCode: 'D-SALES-IT',
			join: '2022-04-01',
			last: '2026-01-08T07:40:00',
			coverage: 68,
			skills: ['ライティング', 'デザイン'],
			skillCodes: ['SK-WRITE', 'SK-DESIGN'],
			articleType: 'text',
			wp: { userId: 105, profilePostId: 2105 },
		},
		{
			id: 'DUMMY_EMP_0006',
			dummy: true,
			employeeNo: 'BW-E-0006',
			name: '渡辺',
			dept: '人事部',
			deptCode: 'D-HR',
			join: '2024-04-01',
			last: '2026-01-08T10:02:00',
			coverage: 77,
			skills: ['ノーコード', 'SNS運用'],
			skillCodes: ['SK-NOCODE', 'SK-SNS'],
			articleType: 'image',
			wp: { userId: 106, profilePostId: 2106 },
		},
		{
			id: 'DUMMY_EMP_0007',
			dummy: true,
			employeeNo: 'BW-E-0007',
			name: '山本',
			dept: '教育',
			deptCode: 'D-EDU',
			join: '2022-10-01',
			last: '2026-01-05T19:20:00',
			coverage: 59,
			skills: ['コーディング'],
			skillCodes: ['SK-CODE'],
			articleType: 'text',
			wp: { userId: 107, profilePostId: 2107 },
		},
		{
			id: 'DUMMY_EMP_0008',
			dummy: true,
			employeeNo: 'BW-E-0008',
			name: '中村',
			dept: '商材営業部',
			deptCode: 'D-SALES-PROD',
			join: '2018-04-01',
			last: '2026-01-07T09:35:00',
			coverage: 88,
			skills: ['マーケティング', 'SNS運用'],
			skillCodes: ['SK-MKT', 'SK-SNS'],
			articleType: 'video',
			wp: { userId: 108, profilePostId: 2108 },
		},
		{
			id: 'DUMMY_EMP_0009',
			dummy: true,
			employeeNo: 'BW-E-0009',
			name: '小林',
			dept: 'IT営業部',
			deptCode: 'D-SALES-IT',
			join: '2025-04-01',
			last: '2026-01-08T06:58:00',
			coverage: 46,
			skills: ['デザイン', 'カメラ・写真'],
			skillCodes: ['SK-DESIGN', 'SK-CAMERA'],
			articleType: 'image',
			wp: { userId: 109, profilePostId: 2109 },
		},
	];

	const articles = [
		{
			id: 'DUMMY_ART_0001',
			dummy: true,
			internalPostId: 'BW-P-20260108-0001',
			slug: 'dummy-ceo-message-2026-temperature-score',
			wp: { postId: 3101 },
			date: '2026-01-08',
			title: '[DUMMY] 代表メッセージ: 2026年の「温度スコア」を整える',
			excerpt: '[DUMMY] 数値だけでは測れない、関心と反応を「温度スコア」として捉えて接続します。',
			tags: ['代表メッセージ', 'カルチャー'],
			type: 'text',
			author: { dept: '経営企画', name: '代表' },
			readTimeMin: 4,
			views: 78,
			coverage: 63,
			reactions: { like: 12, thanks: 4, comment: 8 },
			body: `
				<p><strong>[DUMMY]</strong> テレワークでは、<strong>ログは残っても空気感は伝わりにくい</strong>ことがあります。</p>
				<p>Bit-ween は「見られた」だけでなく、<strong>反応</strong>（いいね・ありがとう・コメント）を関心の指標（温度スコア）として捉え、すぐに把握できる状態を目指します。</p>
				<figure class="media">
					<img alt="イメージ" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%230b4ccf'/%3E%3Cstop offset='1' stop-color='%2394c5ff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='675' fill='url(%23g)'/%3E%3Ccircle cx='930' cy='190' r='140' fill='rgba(255,255,255,0.18)'/%3E%3Ccircle cx='260' cy='460' r='180' fill='rgba(255,255,255,0.14)'/%3E%3Ctext x='70' y='120' font-family='sans-serif' font-size='46' fill='rgba(255,255,255,0.92)'%3EBIT-WEEN%3C/text%3E%3Ctext x='70' y='175' font-family='sans-serif' font-size='22' fill='rgba(255,255,255,0.86)'%3E温度スコアを可視化するダッシュボード%3C/text%3E%3C/svg%3E" />
					<figcaption class="muted">画像埋め込み（ダミー）</figcaption>
				</figure>
			`.trim(),
		},
		{
			id: 'DUMMY_ART_0002',
			dummy: true,
			internalPostId: 'BW-P-20260107-0002',
			slug: 'dummy-itservice-release-notes',
			wp: { postId: 3102 },
			date: '2026-01-07',
			title: '[DUMMY] ITサービス: プロダクト更新まとめ',
			excerpt: '[DUMMY] 改善点を“温度スコア”でトリアージ。反応が集まるポイントを先に磨く。',
			tags: ['ITサービス'],
			type: 'video',
			author: { dept: 'プロダクト', name: '開発チーム' },
			readTimeMin: 3,
			views: 64,
			coverage: 58,
			reactions: { like: 9, thanks: 6, comment: 10 },
			body: `
				<p><strong>[DUMMY]</strong> 動画配信を埋め込める想定です（このデモではプレースホルダー）。</p>
				<div class="video">
					<div class="video-frame" role="img" aria-label="動画プレースホルダー">
						<div class="video-badge">VIDEO</div>
						<div class="video-title">社内共有: リリースの見どころ</div>
					</div>
				</div>
				<p>温度スコアが高い箇所は、次のアクションが自然に生まれやすい。まずは“反応”を拾いにいきます。</p>
			`.trim(),
		},
		{
			id: 'DUMMY_ART_0003',
			dummy: true,
			internalPostId: 'BW-P-20260105-0003',
			slug: 'dummy-thanks-loop-culture',
			wp: { postId: 3103 },
			date: '2026-01-05',
			title: '[DUMMY] カルチャー: “ありがとう”が循環する場をつくる',
			excerpt: '[DUMMY] 軽やかな一言が、心理的な負担を少し軽くする。',
			tags: ['カルチャー'],
			type: 'image',
			author: { dept: '広報', name: '編集部' },
			readTimeMin: 2,
			views: 55,
			coverage: 71,
			reactions: { like: 6, thanks: 5, comment: 4 },
			body: `
				<p><strong>[DUMMY]</strong> 「ありがとう」を送りやすい導線が、反応の広がりを後押しします。</p>
				<figure class="media">
					<img alt="イメージ" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'%3E%3Crect width='1200' height='675' fill='%23eef6ff'/%3E%3Cpath d='M1200 0L0 0 0 465C220 430 430 360 620 300c200-64 420-108 580-82z' fill='%230b4ccf' opacity='0.20'/%3E%3Cpath d='M1200 240c-200-40-430 18-640 90-210 72-420 150-560 140v205h1200z' fill='%230b4ccf' opacity='0.12'/%3E%3Ctext x='70' y='140' font-family='sans-serif' font-size='40' fill='%230b4ccf'%3EThanks loop%3C/text%3E%3Ctext x='70' y='195' font-family='sans-serif' font-size='22' fill='%232a3b58'%3E小さな反応を、温かく可視化%3C/text%3E%3C/svg%3E" />
					<figcaption class="muted">画像埋め込み（ダミー）</figcaption>
				</figure>
			`.trim(),
		},
		{
			id: 'DUMMY_ART_0004',
			dummy: true,
			internalPostId: 'BW-P-20260103-0004',
			slug: 'dummy-hr-onboarding-coverage',
			wp: { postId: 3104 },
			date: '2026-01-03',
			title: '[DUMMY] 人事: オンボーディングの網羅率を上げる工夫',
			excerpt: '[DUMMY] 読む・見る・反応する。網羅率の“詰まり”をデータで発見。',
			tags: ['人事'],
			type: 'text',
			author: { dept: '人事部', name: '人材開発' },
			readTimeMin: 5,
			views: 49,
			coverage: 54,
			reactions: { like: 4, thanks: 2, comment: 5 },
			body: `
				<p><strong>[DUMMY]</strong> 記事ごとの閲覧率・網羅率を並べることで、どこで関心が落ちているかが見えます。</p>
				<ul>
					<li>閲覧率: 入口の興味</li>
					<li>網羅率: 内容の到達</li>
					<li>反応: 共感・疑問・次の行動</li>
				</ul>
			`.trim(),
		},
		{
			id: 'DUMMY_ART_0005',
			dummy: true,
			internalPostId: 'BW-P-20251228-0005',
			slug: 'dummy-faq-heatmap',
			wp: { postId: 3105 },
			date: '2025-12-28',
			title: '[DUMMY] ITサービス: FAQ更新（問い合わせの手がかりを可視化）',
			excerpt: '[DUMMY] 「読まれたのに解決しない」箇所を指標で発見し、改善サイクルを短縮。',
			tags: ['ITサービス'],
			type: 'text',
			author: { dept: 'CS', name: 'サポート' },
			readTimeMin: 3,
			views: 73,
			coverage: 42,
			reactions: { like: 7, thanks: 1, comment: 2 },
			body: `
				<p><strong>[DUMMY]</strong> FAQの「入口」は閲覧率で、「出口」は網羅率・反応で見ます。</p>
				<p>温度スコアが低い箇所は、言い回し・導線・図解の追加で改善しやすい。</p>
			`.trim(),
		},
		{
			id: 'DUMMY_ART_0006',
			dummy: true,
			internalPostId: 'BW-P-20251220-0006',
			slug: 'dummy-light-reaction-design',
			wp: { postId: 3106 },
			date: '2025-12-20',
			title: '[DUMMY] 代表メッセージ: 返信不要をなくす、軽い反応の設計',
			excerpt: '[DUMMY] 堅苦しい稟議ではなく、集いの場としての軽やかさを。',
			tags: ['代表メッセージ', 'カルチャー'],
			type: 'video',
			author: { dept: '経営企画', name: '代表' },
			readTimeMin: 2,
			views: 58,
			coverage: 66,
			reactions: { like: 10, thanks: 3, comment: 12 },
			body: `
				<p><strong>[DUMMY]</strong> リアクションは“返信の重さ”を軽くしてくれます。</p>
				<div class="video">
					<div class="video-frame" role="img" aria-label="動画プレースホルダー">
						<div class="video-badge">VIDEO</div>
						<div class="video-title">社内メッセージ: 反応の文化</div>
					</div>
				</div>
			`.trim(),
		},
		{
			id: 'DUMMY_ART_0007',
			dummy: true,
			internalPostId: 'BW-P-20260102-0007',
			slug: 'dummy-hobby-coffee',
			wp: { postId: 3107 },
			date: '2026-01-02',
			title: '[DUMMY] 趣味: 最近ハマってるコーヒーの話',
			excerpt: '[DUMMY] 雑談の入口として「これ最近よかった」だけでもOK。おすすめの一杯を共有。',
			tags: ['趣味', 'カルチャー'],
			type: 'text',
			author: { dept: 'IT営業部', name: '佐藤' },
			readTimeMin: 2,
			views: 62,
			coverage: 57,
			reactions: { like: 8, thanks: 2, comment: 7 },
			body: `
				<p><strong>[DUMMY]</strong> 仕事の話題に入る前の“軽い一言”として、コーヒーの話はちょうどいいです。</p>
				<p>最近は浅煎りのフルーティー系が好きで、ドリップバッグをいろいろ試しています。</p>
				<p>おすすめがあれば、@メンションでそっと教えてください。</p>
			`.trim(),
		},
		{
			id: 'DUMMY_ART_0008',
			dummy: true,
			internalPostId: 'BW-P-20251230-0008',
			slug: 'dummy-hobby-running',
			wp: { postId: 3108 },
			date: '2025-12-30',
			title: '[DUMMY] 趣味: 週末ランニング、ゆるく続けてます',
			excerpt: '[DUMMY] ガチ勢じゃなくてもOK。ゆるい運動習慣の話と、同じペースの人募集。',
			tags: ['趣味', '教育'],
			type: 'image',
			author: { dept: '教育', name: '高橋' },
			readTimeMin: 2,
			views: 58,
			coverage: 61,
			reactions: { like: 7, thanks: 3, comment: 5 },
			body: `
				<p><strong>[DUMMY]</strong> タイムよりも「続ける」が目標です。</p>
				<p>同じくらいのペースの人がいたら、気軽に声かけてください。</p>
				<figure class="media">
					<img alt="イメージ" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'%3E%3Crect width='1200' height='675' fill='%23eef6ff'/%3E%3Ccircle cx='300' cy='310' r='190' fill='%230b4ccf' opacity='0.18'/%3E%3Ccircle cx='860' cy='420' r='240' fill='%230b4ccf' opacity='0.10'/%3E%3Ctext x='70' y='120' font-family='sans-serif' font-size='44' fill='%230b4ccf'%3ERUNNING%3C/text%3E%3Ctext x='70' y='175' font-family='sans-serif' font-size='22' fill='%232a3b58'%3Eゆるく、気軽に%3C/text%3E%3C/svg%3E" />
					<figcaption class="muted">画像埋め込み（ダミー）</figcaption>
				</figure>
			`.trim(),
		},
		{
			id: 'DUMMY_ART_0009',
			dummy: true,
			internalPostId: 'BW-P-20251227-0009',
			slug: 'dummy-hobby-movie',
			wp: { postId: 3109 },
			date: '2025-12-27',
			title: '[DUMMY] 趣味: 今月の“よかった映画/ドラマ”共有しませんか',
			excerpt: '[DUMMY] 好きな作品を1つだけでも。コメント欄で軽く共有する場（デモ）。',
			tags: ['趣味', 'カルチャー'],
			type: 'text',
			author: { dept: 'デザイン', name: '田中' },
			readTimeMin: 3,
			views: 66,
			coverage: 52,
			reactions: { like: 9, thanks: 1, comment: 11 },
			body: `
				<p><strong>[DUMMY]</strong> 最近見てよかった映画やドラマを、1つだけ置いていってください。</p>
				<p>ジャンルは何でもOK。ネタバレは控えめにお願いします。</p>
				<p>気になる作品があったら、@メンションで質問しても大丈夫です。</p>
			`.trim(),
		},
	];

	const calendarEvents = [
		{ id: 'DUMMY_EVT_0001', dummy: true, date: '2026-01-08', title: '[DUMMY] 全社朝会', tag: '全社' },
		{ id: 'DUMMY_EVT_0002', dummy: true, date: '2026-01-10', title: '[DUMMY] 新入社員オンボード', tag: '教育' },
		{ id: 'DUMMY_EVT_0003', dummy: true, date: '2026-01-13', title: '[DUMMY] 営業勉強会', tag: 'IT営業部' },
		{ id: 'DUMMY_EVT_0004', dummy: true, date: '2026-01-15', title: '[DUMMY] 1on1 デー', tag: '人事部' },
		{ id: 'DUMMY_EVT_0005', dummy: true, date: '2026-01-21', title: '[DUMMY] プロダクト定例', tag: 'プロダクト' },
	];
	// DUMMY_DATA_END

	const mentionUsers = employees.map((e) => ({ name: e.name, dept: e.dept }));

	// Optional helper for bulk cleanup during dev: removes items marked dummy and re-renders.
	// This does not delete code; it just demonstrates machine-readable separation.
	window.bitweenRemoveDummyData = () => {
		try {
			toast('DUMMYデータを非表示にしました（デモ）');
		} catch {
			// ignore
		}
		articles.splice(0, articles.length, ...articles.filter((a) => !a.dummy && !String(a.id || '').startsWith('DUMMY_')));
		employees.splice(0, employees.length, ...employees.filter((e) => !e.dummy && !String(e.id || '').startsWith('DUMMY_')));
		calendarEvents.splice(0, calendarEvents.length, ...calendarEvents.filter((ev) => !ev.dummy && !String(ev.id || '').startsWith('DUMMY_')));

		// re-render
		renderStats();
		renderPopular();
		renderMetricsTable();
		renderArticles();
		renderEmployees();
		renderAlerts();
		renderCalendar();
	};

	function renderAlerts() {
		const root = $('#alertList');
		if (!root) return;

		const now = new Date('2026-01-08T12:00:00');

		const candidates = [...employees]
			.map((e) => {
				const last = new Date(e.last);
				const daysAgo = Math.max(0, Math.floor((now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24)));
				const score = (100 - e.coverage) * 2 + Math.min(daysAgo, 10) * 6;
				const reasons = [];
				if (e.coverage < 55) reasons.push(`網羅率が低い（${e.coverage}%）`);
				if (daysAgo >= 2) reasons.push(`最終アクセスが${daysAgo}日前`);
				if (reasons.length === 0) reasons.push('反応の手がかりが少ない（デモ）');
				return { e, daysAgo, score, reasons };
			})
			.sort((a, b) => b.score - a.score)
			.slice(0, 3);

		root.innerHTML = candidates
			.map(({ e, reasons }) => {
				const sev = e.coverage < 55 ? 'cool' : e.coverage < 65 ? 'warm' : 'hot';
				const dummyTag = e.dummy || String(e.id).startsWith('DUMMY_') ? `<span class="tag dummy">DUMMY</span>` : '';
				return `
					<li class="alert" ${e.dummy ? 'data-dummy="true"' : ''}>
						<div class="alert-top">
							<div class="alert-title">${dummyTag}<span class="alert-name">${e.dept} ${e.name}</span></div>
							<span class="pill ${sev}">要フォロー</span>
						</div>
						<div class="alert-meta">理由: ${reasons.join(' / ')}</div>
					</li>
				`.trim();
			})
			.join('');

		if (!root.innerHTML) {
			root.innerHTML = `<li class="muted small">アラートはありません（デモ）</li>`;
		}
	}

	function clamp(n, min, max) {
		return Math.max(min, Math.min(max, n));
	}

	function escapeHtml(str) {
		return String(str)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;');
	}

	function computeTemp(article) {
		const reactions = article.reactions.like + article.reactions.thanks + article.reactions.comment;
		const reactionScore = clamp(reactions * 2, 0, 100);
		return Math.round(article.views * 0.5 + article.coverage * 0.3 + reactionScore * 0.2);
	}

	function computePersonTemp(person) {
		// 社員向けの「温度スコア」（デモ）: 直近アクセス + 網羅率を合成
		const now = new Date('2026-01-08T12:00:00');
		const last = new Date(person.last);
		const daysAgo = Math.max(0, Math.floor((now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24)));
		const recency = clamp(100 - daysAgo * 12, 0, 100);
		return Math.round(person.coverage * 0.6 + recency * 0.4);
	}

	function formatDate(iso) {
		const [y, m, d] = iso.split('-').map((v) => Number(v));
		return `${y}年${m}月${d}日`;
	}

	function toast(message) {
		const el = $('#toast');
		el.textContent = message;
		el.hidden = false;
		el.classList.remove('show');
		// reflow
		void el.offsetWidth;
		el.classList.add('show');
		window.clearTimeout(toast._t);
		toast._t = window.setTimeout(() => {
			el.classList.remove('show');
			window.setTimeout(() => (el.hidden = true), 220);
		}, 1600);
	}

	function setRoute(route) {
		state.route = route;
		$$('.route').forEach((sec) => {
			const isActive = sec.dataset.route === route;
			sec.hidden = !isActive;
		});
		document.documentElement.style.scrollBehavior = 'smooth';
		window.scrollTo({ top: 0 });
		window.setTimeout(() => (document.documentElement.style.scrollBehavior = ''), 10);
	}

	function buildTagOptions() {
		const tags = Array.from(new Set(articles.flatMap((a) => a.tags))).sort();
		const sel = $('#tagSelect');
		tags.forEach((t) => {
			const opt = document.createElement('option');
			opt.value = t;
			opt.textContent = t;
			sel.appendChild(opt);
		});
	}

	function renderPopular() {
		const list = $('#popularList');
		list.innerHTML = '';
		const sorted = [...articles].sort((a, b) => computeTemp(b) - computeTemp(a)).slice(0, 3);
		sorted.forEach((a) => {
			const li = document.createElement('li');
			li.className = 'rank-item';
			li.innerHTML = `
				<button class="rank-link" type="button" data-open-article="${a.id}">
					<span class="rank-title">${a.title}</span>
					<span class="rank-meta">温度スコア ${computeTemp(a)}%</span>
				</button>
			`;
			list.appendChild(li);
		});
	}

	function renderMetricsTable() {
		const tbody = $('#articleMetricsTable tbody');
		tbody.innerHTML = '';
		articles
			.map((a) => ({ ...a, temp: computeTemp(a) }))
			.sort((a, b) => b.temp - a.temp)
			.forEach((a) => {
				const tr = document.createElement('tr');
				tr.innerHTML = `
					<th scope="row">
						<button class="table-link" type="button" data-open-article="${a.id}">${a.title}</button>
					</th>
					<td class="num">${a.views}%</td>
					<td class="num">${a.coverage}%</td>
					<td class="num"><span class="pill ${a.temp >= 70 ? 'hot' : a.temp >= 55 ? 'warm' : 'cool'}">${a.temp}%</span></td>
				`;
				tbody.appendChild(tr);
			});
	}

	function articleCardHTML(a) {
		const temp = computeTemp(a);
		const thumb = a.type === 'video' ? 'VIDEO' : a.type === 'image' ? 'IMAGE' : 'TEXT';
		const pill = temp >= 70 ? 'hot' : temp >= 55 ? 'warm' : 'cool';
		const tagBadges = a.tags.map((t) => `<span class="tag">${t}</span>`).join('');
		const dummyBadge = a.dummy || String(a.id).startsWith('DUMMY_') ? `<span class="dummy-badge" aria-label="DUMMYデータ">DUMMY</span>` : '';

		return `
			<article class="card" data-article-id="${a.id}" ${a.dummy ? 'data-dummy="true"' : ''}>
				<button class="card-hit" type="button" aria-label="記事を開く" data-open-article="${a.id}"></button>
				<div class="thumb" aria-hidden="true">
					<div class="thumb-badge">${thumb}</div>
					${dummyBadge}
				</div>
				<div class="card-body">
					<div class="meta">
						<time datetime="${a.date}">${formatDate(a.date)}</time>
						<span class="dot" aria-hidden="true">•</span>
						<span class="pill ${pill}">温度スコア ${temp}%</span>
					</div>
					<h3 class="card-title">${a.title}</h3>
					<p class="card-excerpt">${a.excerpt}</p>
					<div class="card-foot">
						<div class="tags" aria-label="タグ">${tagBadges}</div>
						<div class="metrics" aria-label="指標">
							<span class="metric">閲覧 ${a.views}%</span>
							<span class="metric">網羅 ${a.coverage}%</span>
						</div>
					</div>
				</div>
			</article>
		`.trim();
	}

	function applyArticleFilter(list) {
		const q = ($('#articleQuery').value || '').trim().toLowerCase();
		const tag = $('#tagSelect').value;
		const cat = state.activeCategory;

		return list.filter((a) => {
			const inQuery =
				!q ||
				a.title.toLowerCase().includes(q) ||
				a.excerpt.toLowerCase().includes(q) ||
				a.tags.some((t) => t.toLowerCase().includes(q));
			const inTag = !tag || a.tags.includes(tag);
			const inCat = !cat || a.tags.includes(cat);
			return inQuery && inTag && inCat;
		});
	}

	function sortArticles(list) {
		const mode = $('#articleSort').value;
		const withTemp = list.map((a) => ({ ...a, temp: computeTemp(a) }));
		if (mode === 'new') return withTemp.sort((a, b) => b.date.localeCompare(a.date));
		if (mode === 'views') return withTemp.sort((a, b) => b.views - a.views);
		if (mode === 'coverage') return withTemp.sort((a, b) => b.coverage - a.coverage);
		return withTemp.sort((a, b) => b.temp - a.temp);
	}

	function renderArticles() {
		const root = $('#articleList');
		const filtered = sortArticles(applyArticleFilter(articles));
		root.innerHTML = filtered.map(articleCardHTML).join('');
		if (filtered.length === 0) {
			root.innerHTML = `<div class="empty">一致する記事がありません。検索条件をゆるめてみてください。</div>`;
		}
	}

	function openArticle(id) {
		const a = articles.find((x) => x.id === id);
		if (!a) return;
		state.selectedArticleId = id;

		$('#articleTitle').textContent = a.title;
		const author = a.author ? `${a.author.dept} ${a.author.name}` : '—';
		const dummyLabel = a.dummy ? ' ・ [DUMMY]' : '';
		$('#articleMeta').textContent = `${formatDate(a.date)} ・ ${a.type.toUpperCase()} ・ 投稿: ${author} ・ 反応 ${a.reactions.like + a.reactions.thanks + a.reactions.comment}${dummyLabel}`;
		$('#articleTags').innerHTML = a.tags.map((t) => `<span class="tag">${t}</span>`).join('');
		$('#articleBody').innerHTML = a.body;

		const temp = computeTemp(a);
		$('#detailViews').textContent = `${a.views}%`;
		$('#detailCoverage').textContent = `${a.coverage}%`;
		$('#detailTemp').textContent = `${temp}%`;
		$('#detailTemp').classList.toggle('temp-hot', temp >= 70);
		$('#detailTemp').classList.toggle('temp-warm', temp >= 55 && temp < 70);
		$('#detailTemp').classList.toggle('temp-cool', temp < 55);

		// reset reactions UI
		$('#likeCount').textContent = String(a.reactions.like);
		$('#likeBtn').setAttribute('aria-pressed', 'false');
		$('#likeBtn').classList.remove('popped');

		// seed comments
		const list = $('#commentList');
		list.innerHTML = '';
		const seeds = [
			{ dept: 'IT営業部', name: '佐藤', text: '[DUMMY] ここ、刺さりました。温度スコアの定義が分かりやすい！' },
			{ dept: '人事部', name: '田中', text: '[DUMMY] @鈴木 これ、オンボーディング記事にも効きそうです。' },
		];
		seeds.forEach((c) => addCommentBubble(c, { animate: false }));

		setRoute('article');
	}

	function addCommentBubble({ dept, name, text }, { animate } = { animate: true }) {
		const bubble = document.createElement('div');
		bubble.className = 'bubble';

		const mentionified = text.replace(/@([\p{L}\p{N}_]{1,16})/gu, '<span class="mention">@$1</span>');
		bubble.innerHTML = `
			<div class="bubble-ico" aria-hidden="true"></div>
			<div class="bubble-body">
				<div class="bubble-meta"><span class="bubble-dept">${dept}</span><span class="dot">•</span><span class="bubble-name">${name}</span></div>
				<div class="bubble-text">${mentionified}</div>
			</div>
		`;

		if (animate) bubble.classList.add('enter');
		$('#commentList').prepend(bubble);
		if (animate) {
			window.setTimeout(() => bubble.classList.remove('enter'), 260);
		}
	}

	function renderSkills() {
		const root = $('#skillChips');
		root.innerHTML = '';
		skills.forEach((s) => {
			const btn = document.createElement('button');
			btn.type = 'button';
			btn.className = 'chip';
			btn.textContent = `#${s}`;
			btn.setAttribute('aria-pressed', 'false');
			btn.addEventListener('click', () => {
				if (state.skillFilters.has(s)) state.skillFilters.delete(s);
				else state.skillFilters.add(s);
				btn.classList.toggle('active');
				btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
				renderEmployees();
			});
			root.appendChild(btn);
		});
	}

	function employeeCard(e) {
		const hot = e.coverage >= 75 ? 'hot' : e.coverage >= 60 ? 'warm' : 'cool';
		const skillBadges = e.skills.map((s) => `<span class="tag">${s}</span>`).join('');
		const last = new Date(e.last);
		const lastTxt = `${last.getMonth() + 1}/${last.getDate()} ${String(last.getHours()).padStart(2, '0')}:${String(last.getMinutes()).padStart(2, '0')}`;
		const type = e.articleType.toUpperCase();
		const dummyTag = e.dummy || String(e.id).startsWith('DUMMY_') ? `<span class="tag dummy">DUMMY</span>` : '';

		return `
			<article class="emp" aria-label="社員カード">
				<div class="emp-top">
					<div class="avatar sm" aria-hidden="true"></div>
					<div>
						<div class="emp-name">${e.name} ${dummyTag}</div>
						<div class="emp-meta">${e.dept} ・ 入社 ${e.join} ・ 最終アクセス ${lastTxt}</div>
					</div>
				</div>
				<div class="emp-mid">
					<div class="emp-kpis">
						<div class="kpi"><span class="kpi-label">網羅率</span><span class="kpi-val"><span class="pill ${hot}">${e.coverage}%</span></span></div>
						<div class="kpi"><span class="kpi-label">記事タイプ</span><span class="kpi-val">${type}</span></div>
					</div>
					<div class="tags" aria-label="スキル">${skillBadges}</div>
				</div>
				<div class="emp-foot">
					<button class="btn btn-ghost" type="button" data-mention="${e.name}">コメントで@${e.name}をメンション</button>
				</div>
			</article>
		`.trim();
	}

	function renderEmployees() {
		const q = ($('#empQuery').value || '').trim().toLowerCase();
		const sort = $('#empSort').value;
		const type = $('#empArticleType').value;
		const limit = Number($('#empLimit').value);
		const dept = $('#empDept').value;

		let list = employees.filter((e) => {
			const inQ =
				!q ||
				e.name.toLowerCase().includes(q) ||
				e.dept.toLowerCase().includes(q) ||
				e.skills.some((s) => s.toLowerCase().includes(q));
			const inDept = !dept || e.dept === dept;
			const inType = !type || e.articleType === type;
			const inSkills = state.skillFilters.size === 0 || Array.from(state.skillFilters).every((s) => e.skills.includes(s));
			return inQ && inDept && inType && inSkills;
		});

		if (sort === 'join') list.sort((a, b) => a.join.localeCompare(b.join));
		if (sort === 'last') list.sort((a, b) => b.last.localeCompare(a.last));
		if (sort === 'coverage') list.sort((a, b) => b.coverage - a.coverage);

		list = list.slice(0, limit);
		const root = $('#employeeList');
		root.innerHTML = list.map(employeeCard).join('') || `<div class="empty">条件に一致する社員がいません。</div>`;
		renderMatches();
	}

	function renderMatches() {
		const list = $('#matchList');
		if (!list) return;

		const selected = Array.from(state.skillFilters);
		const candidates = [...employees]
			.map((e) => {
				const overlap = selected.filter((s) => e.skills.includes(s));
				return {
					e,
					overlap,
					overlapScore: overlap.length,
					temp: computePersonTemp(e),
				};
			})
			.sort((a, b) => {
				if (b.overlapScore !== a.overlapScore) return b.overlapScore - a.overlapScore;
				return b.temp - a.temp;
			});

		const picked = (selected.length ? candidates.filter((c) => c.overlapScore > 0) : candidates).slice(0, 3);
		const items = picked.length ? picked : candidates.slice(0, 3);

		list.innerHTML = items
			.map(({ e, overlap, overlapScore, temp }) => {
				const metaParts = [];
				if (selected.length) {
					metaParts.push(overlapScore ? `共通スキル: ${overlap.join(' / ')}` : '共通スキル: まだなし');
				} else {
					metaParts.push('スキルを選ぶと精度が上がります');
				}
				metaParts.push(`温度スコア: ${temp}%`);

				return `
					<li class="rank-item">
						<button class="rank-link" type="button" data-mention="${escapeHtml(e.name)}">
							<span class="rank-title">${escapeHtml(e.dept)} ${escapeHtml(e.name)}</span>
							<span class="rank-meta">${escapeHtml(metaParts.join(' ・ '))}</span>
						</button>
					</li>
				`.trim();
			})
			.join('');
	}

	function renderCalendar() {
		const root = $('#calendar');
		const now = new Date('2026-01-08T12:00:00');

		const events = calendarEvents;

		const y = now.getFullYear();
		const m = now.getMonth();

		function dayKey(d) {
			const mm = String(m + 1).padStart(2, '0');
			const dd = String(d).padStart(2, '0');
			return `${y}-${mm}-${dd}`;
		}

		if (state.calView === 'day') {
			const key = dayKey(now.getDate());
			const dayEvents = events.filter((e) => e.date === key);
			root.innerHTML = `
				<div class="cal-head">${y}年${m + 1}月${now.getDate()}日（日次）</div>
				<div class="cal-list">
					${dayEvents.length ? dayEvents.map((e) => `<div class="cal-item" ${e.dummy ? 'data-dummy="true"' : ''}><span class="cal-tag">${e.tag}</span>${e.title}</div>`).join('') : '<div class="muted">予定はありません</div>'}
				</div>
			`;
			return;
		}

		if (state.calView === 'week') {
			const start = new Date(now);
			start.setDate(now.getDate() - now.getDay());
			const days = Array.from({ length: 7 }, (_, i) => {
				const d = new Date(start);
				d.setDate(start.getDate() + i);
				const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
				const label = `${d.getMonth() + 1}/${d.getDate()} (${['日', '月', '火', '水', '木', '金', '土'][d.getDay()]})`;
				const es = events.filter((e) => e.date === key);
				return { label, es };
			});
			root.innerHTML = `
				<div class="cal-head">週次</div>
				<div class="cal-week">
					${days
						.map(
							(d) => `
								<div class="cal-col">
									<div class="cal-col-head">${d.label}</div>
									${d.es.length ? d.es.map((e) => `<div class="cal-item" ${e.dummy ? 'data-dummy="true"' : ''}><span class="cal-tag">${e.tag}</span>${e.title}</div>`).join('') : '<div class="muted small">—</div>'}
								</div>
							`
						)
						.join('')}
				</div>
			`;
			return;
		}

		// month
		const first = new Date(y, m, 1);
		const last = new Date(y, m + 1, 0);
		const startPad = first.getDay();
		const totalDays = last.getDate();

		const cells = [];
		for (let i = 0; i < startPad; i++) cells.push({ blank: true });
		for (let d = 1; d <= totalDays; d++) {
			const key = dayKey(d);
			const es = events.filter((e) => e.date === key);
			cells.push({ blank: false, d, es, today: d === now.getDate() });
		}

		root.innerHTML = `
			<div class="cal-head">${y}年${m + 1}月（月次）</div>
			<div class="cal-grid" role="grid" aria-label="カレンダー">
				${['日', '月', '火', '水', '木', '金', '土'].map((w) => `<div class="cal-w">${w}</div>`).join('')}
				${cells
					.map((c) => {
						if (c.blank) return `<div class="cal-cell blank" aria-hidden="true"></div>`;
						return `
							<div class="cal-cell ${c.today ? 'today' : ''}" role="gridcell">
								<div class="cal-date">${c.d}</div>
								<div class="cal-events">
									${c.es
										.slice(0, 2)
										.map((e) => `<div class="cal-dot" ${e.dummy ? 'data-dummy="true"' : ''}><span class="cal-tag">${e.tag}</span>${e.title}</div>`)
										.join('')}
									${c.es.length > 2 ? `<div class="muted small">+${c.es.length - 2}件</div>` : ''}
								</div>
							</div>
						`;
					})
					.join('')}
			</div>
		`;
	}

	function renderStats() {
		const r = state.reactionsToday;
		$('#statReactions').textContent = `${r.like + r.thanks + r.comment}`;
		const orgTemp = Math.round(articles.reduce((sum, a) => sum + computeTemp(a), 0) / articles.length);
		const coverage = Math.round(articles.reduce((sum, a) => sum + a.coverage, 0) / articles.length);
		$('#statOrgTemp').textContent = `${orgTemp}`;
		$('#statCoverage').textContent = `${coverage}`;
	}

	function setupChart() {
		const labels = articles.map((a) => (a.title.length > 12 ? a.title.slice(0, 12) + '…' : a.title));
		const data = articles.map((a) => computeTemp(a));

		if (!window.Chart) {
			$('#chartFallback').hidden = false;
			const bars = $('#fallbackBars');
			bars.innerHTML = data
				.map((v, i) => {
					return `
						<div class="fbar" title="${labels[i]}: ${v}%">
							<div class="fbar-fill" style="height:${clamp(v, 0, 100)}%"></div>
						</div>
					`;
				})
				.join('');
			return;
		}

		const ctx = $('#orgTempChart');
		// eslint-disable-next-line no-new
		new window.Chart(ctx, {
			type: 'bar',
			data: {
				labels,
				datasets: [
					{
						label: '温度スコア（%）',
						data,
						backgroundColor: 'rgba(11, 76, 207, 0.35)',
						borderColor: 'rgba(11, 76, 207, 0.9)',
						borderWidth: 1,
						borderRadius: 10,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: { display: false },
					tooltip: { enabled: true },
				},
				scales: {
					y: { beginAtZero: true, max: 100, ticks: { stepSize: 20 } },
					x: { ticks: { maxRotation: 0, autoSkip: true } },
				},
			},
		});
	}

	function setupNav() {
		function closeMobile() {
			const box = $('#mobileNav');
			box.hidden = true;
			$('#toggleMenu').setAttribute('aria-expanded', 'false');
		}

		$('#toggleMenu').addEventListener('click', () => {
			const box = $('#mobileNav');
			const next = box.hidden;
			box.hidden = !next;
			$('#toggleMenu').setAttribute('aria-expanded', next ? 'true' : 'false');
		});

		$('#contactBtn').addEventListener('click', () => toast('CONTACT（デモ）: お問い合わせ導線を想定'));
		$('#contactBtnMobile').addEventListener('click', () => {
			toast('CONTACT（デモ）: お問い合わせ導線を想定');
			closeMobile();
		});

		document.addEventListener('click', (e) => {
			const t = e.target;
			if (!(t instanceof HTMLElement)) return;
			const routeEl = t.closest('[data-route]');
			const route = routeEl?.getAttribute('data-route');
			const focusId = routeEl?.getAttribute('data-focus');
			if (route) {
				e.preventDefault();
				if (route === 'article') {
					openArticle(state.selectedArticleId || articles[0].id);
					closeMobile();
					if (focusId) {
						window.setTimeout(() => {
							const target = document.getElementById(focusId);
							if (target) target.scrollIntoView({ block: 'start', behavior: 'smooth' });
						}, 60);
					}
					return;
				}
				setRoute(route);
				closeMobile();
				if (focusId) {
					window.setTimeout(() => {
						const target = document.getElementById(focusId);
						if (target) target.scrollIntoView({ block: 'start', behavior: 'smooth' });
					}, 60);
				}
				return;
			}

			const openId = t.closest('[data-open-article]')?.getAttribute('data-open-article');
			if (openId) {
				e.preventDefault();
				openArticle(openId);
				return;
			}

			const mention = t.closest('[data-mention]')?.getAttribute('data-mention');
			if (mention) {
				e.preventDefault();
				// 記事詳細に遷移し、コメント欄にメンションを入れる
				openArticle(state.selectedArticleId || articles[0].id);
				const input = $('#commentInput');
				input.value = `@${mention} ` + input.value;
				input.focus();
				toast(`@${mention} を入力しました`);
				return;
			}

			const cat = t.closest('[data-category]')?.getAttribute('data-category');
			if (cat) {
				state.activeCategory = cat;
				toast(`カテゴリ: ${cat}`);
				renderArticles();
				return;
			}
		});
	}

	function setupArticleFilters() {
		['input', 'change'].forEach((evt) => {
			$('#articleQuery').addEventListener(evt, renderArticles);
			$('#tagSelect').addEventListener(evt, () => {
				state.activeCategory = '';
				renderArticles();
			});
			$('#articleSort').addEventListener(evt, renderArticles);
		});

		$$('.chip[data-chip-tag]').forEach((btn) => {
			btn.addEventListener('click', () => {
				const tag = btn.getAttribute('data-chip-tag');
				$('#tagSelect').value = tag;
				state.activeCategory = '';
				renderArticles();
				toast(`#${tag} を適用`);
			});
		});
	}

	function setupReactions() {
		$('#likeBtn').addEventListener('click', () => {
			const a = articles.find((x) => x.id === state.selectedArticleId);
			if (!a) return;
			const pressed = $('#likeBtn').getAttribute('aria-pressed') === 'true';
			$('#likeBtn').setAttribute('aria-pressed', pressed ? 'false' : 'true');
			if (!pressed) {
				a.reactions.like += 1;
				$('#likeCount').textContent = String(a.reactions.like);
				$('#likeBtn').classList.add('popped');
				window.setTimeout(() => $('#likeBtn').classList.remove('popped'), 220);
				toast('いいね！を送りました');
				renderStats();
				renderPopular();
				renderMetricsTable();
			}
		});

		$('#thanksForm').addEventListener('submit', (e) => {
			e.preventDefault();
			const a = articles.find((x) => x.id === state.selectedArticleId);
			if (!a) return;
			const msg = ($('#thanksInput').value || '').trim();
			if (!msg) {
				toast('一言入力してください');
				return;
			}
			a.reactions.thanks += 1;
			$('#thanksInput').value = '';
			toast(`ありがとうを送信: 「${msg}」`);
			renderStats();
			renderPopular();
			renderMetricsTable();
		});
	}

	function setupComments() {
		const input = $('#commentInput');
		const box = $('#mentionBox');

		function showMentions(query) {
			const q = (query || '').trim();
			const items = mentionUsers.filter((u) => !q || u.name.includes(q)).slice(0, 5);
			if (items.length === 0) {
				box.hidden = true;
				return;
			}
			box.hidden = false;
			box.innerHTML = items
				.map(
					(u) =>
						`<button type="button" class="mention-item" role="option" data-mention-pick="${u.name}"><span class="mention-name">${u.name}</span><span class="mention-dept">${u.dept}</span></button>`
				)
				.join('');
		}

		function currentMention(text, caret) {
			const before = text.slice(0, caret);
			const at = before.lastIndexOf('@');
			if (at < 0) return null;
			// 空白をまたいでいたら対象外
			const afterAt = before.slice(at + 1);
			if (/[\s]/.test(afterAt)) return null;
			return { at, q: afterAt };
		}

		input.addEventListener('input', () => {
			const m = currentMention(input.value, input.selectionStart || 0);
			if (!m) {
				box.hidden = true;
				return;
			}
			showMentions(m.q);
		});

		input.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				box.hidden = true;
			}
		});

		box.addEventListener('click', (e) => {
			const t = e.target;
			if (!(t instanceof HTMLElement)) return;
			const pick = t.closest('[data-mention-pick]')?.getAttribute('data-mention-pick');
			if (!pick) return;

			const caret = input.selectionStart || 0;
			const m = currentMention(input.value, caret);
			if (!m) return;
			const before = input.value.slice(0, m.at);
			const after = input.value.slice(caret);
			input.value = `${before}@${pick} ${after}`;
			input.focus();
			box.hidden = true;
		});

		$('#commentForm').addEventListener('submit', (e) => {
			e.preventDefault();
			const a = articles.find((x) => x.id === state.selectedArticleId);
			if (!a) return;
			const dept = $('#commentDept').value;
			const name = ($('#commentName').value || '').trim() || '匿名';
			const text = ($('#commentInput').value || '').trim();
			if (!text) return;
			a.reactions.comment += 1;
			$('#commentInput').value = '';
			box.hidden = true;
			addCommentBubble({ dept, name, text }, { animate: true });
			toast('コメントを投稿しました');
			renderStats();
			renderPopular();
			renderMetricsTable();
		});
	}

	function setupEmployeeFilters() {
		['input', 'change'].forEach((evt) => {
			$('#empQuery').addEventListener(evt, renderEmployees);
			$('#empSort').addEventListener(evt, renderEmployees);
			$('#empArticleType').addEventListener(evt, renderEmployees);
			$('#empLimit').addEventListener(evt, renderEmployees);
			$('#empDept').addEventListener(evt, renderEmployees);
		});
	}

	function setupCalendarControls() {
		$$('.seg[data-cal-view]').forEach((btn) => {
			btn.addEventListener('click', () => {
				const v = btn.getAttribute('data-cal-view');
				state.calView = v;
				$$('.seg[data-cal-view]').forEach((b) => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
				renderCalendar();
			});
		});
	}

	function init() {
		buildTagOptions();
		renderStats();
		renderPopular();
		renderMetricsTable();
		renderArticles();
		renderSkills();
		renderEmployees();
		renderAlerts();
		renderCalendar();

		setupNav();
		setupArticleFilters();
		setupReactions();
		setupComments();
		setupEmployeeFilters();
		setupCalendarControls();

		// 初期表示記事（温度スコアのデモを伝えるため）
		state.selectedArticleId = articles[0].id;

		// Chart.js は defer 読み込みなので、ロード完了を待って初期化
		window.addEventListener('load', setupChart, { once: true });
	}

	init();
})();
