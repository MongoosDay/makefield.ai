/* MakeField AI 다국어 시스템 (ko/en/zh/ja/vi/th)
   - HTML의 한국어(ko)가 원본. 로드 시 캐시 → ko 복원용.
   - 아래 사전은 en/zh/ja/vi/th 5개 언어만 보유. */
const LANGS = [
  ['ko', '한국어'],
  ['en', 'English'],
  ['zh', '中文'],
  ['ja', '日本語'],
  ['vi', 'Tiếng Việt'],
  ['th', 'ไทย']
];

const I18N = {};

/* ===== English ===== */
I18N.en = {
  'meta.title': 'MakeField AI — We build AI on the field',
  'meta.desc': '95% of companies fail at AI adoption. MakeField AI designs transformation, not tools.',
  'nav.why': 'Why', 'nav.solution': 'Solution', 'nav.proof': 'Proof', 'nav.programs': 'Programs', 'nav.survey': 'Survey', 'nav.about': 'About', 'nav.contact': 'Contact',
  'hero.badge': '95% of companies fail at AI adoption',
  'hero.h1': 'We don\u2019t teach tools.<br><span class="gradient-text">We design transformation.</span>',
  'hero.sub': 'The era of teaching how to use ChatGPT is over.<br>With an AI transformation methodology proven by 15 years of field experience,<br>we create real change on the industrial front line.',
  'hero.btn1': 'See the methodology', 'hero.btn2': 'Diagnose your company &rarr;', 'hero.btn3': 'Contact',
  'problem.label': 'The Problem',
  'problem.title': 'Why most companies<br>fail at AI adoption',
  'problem.desc': 'They buy AI tools and tell employees to \u201cfigure it out.\u201d<br>Three months later, most conclude \u201cit doesn\u2019t fit our work.\u201d<br>The problem isn\u2019t AI. The <strong>approach</strong> is wrong.',
  'problem.c1h': 'Companies that abandoned AI projects',
  'problem.c1p': 'Adopted but halted after failing to achieve ROI. The leading cause: data quality issues (43%).',
  'problem.c1s': 'Deloitte State of AI 2026',
  'problem.c2h': '\u201cPrompting alone isn\u2019t enough\u201d',
  'problem.c2p': '82% of IT leaders say prompt engineering alone can\u2019t deliver real results. AI performance is determined by data, not tools.',
  'problem.c2s': '2026 Context Management Report',
  'problem.c3h': 'AI adoption rate of Korean SMEs',
  'problem.c3p': 'Extremely low compared to large enterprises (49.2%). The biggest barrier: a lack of tangible sense of \u201chow AI helps our business.\u201d',
  'problem.c3s': 'Korea Chamber of Commerce 2025',
  'solution.label': 'The Solution',
  'solution.title': 'AI Amplification Strategy<br><span class="gradient-text">4 Phase Framework</span>',
  'solution.desc': 'Instead of teaching how to use tools, we <strong>convert your business knowledge into a form AI can use</strong>.<br>Not AI that replaces employees, but AI that <strong>amplifies them tenfold</strong>.<br>A systematic methodology that lets 100 people who did 10 tasks each now do 100 each.',
  'solution.p1h': 'Knowledge Structuring',
  'solution.p1p': 'Convert employees\u2019 tacit knowledge (experience, know-how, intuition) into explicit knowledge (documents, data, rules). Tool usage is not taught at this stage.',
  'solution.p2h': 'Central Knowledge DB',
  'solution.p2p': 'Integrate structured knowledge into a central system. Departmental process maps, decision rules, and troubleshooting DBs become connected as one.',
  'solution.p3h': 'AI System Embedding',
  'solution.p3p': 'Build AI workflows on top of accumulated knowledge. Employees use it like an ERP, without needing to understand the technology.',
  'solution.p4h': 'Amplified Harvest',
  'solution.p4p': '3\u201310\u00d7 productivity per person. Scale your business without new hires, and retain knowledge in the system even when key people leave.',
  'solution.quote': '\u201cA less smart AI with good data beats<br>a smart AI with bad data.<br>Structuring your employees\u2019 knowledge is the starting point of every AI strategy.\u201d',
  'proof.label': 'The Proof',
  'proof.title': 'We did it ourselves.<br><span class="gradient-text">Day <span id="days-count">0</span> and counting.</span>',
  'proof.desc': 'This isn\u2019t theory. It\u2019s an ongoing record of a 15-year industrial engineer<br>applying, measuring, and validating the AI transformation methodology in real field work.',
  'proof.s1': 'AI agents built', 'proof.s2': 'Knowledge base documents', 'proof.s3': 'Lines of structured knowledge', 'proof.s4': 'Cumulative tokens processed', 'proof.s5': 'Years in the field', 'proof.s6': 'Days of live proof',
  'proof.quote': '\u201cCross-validated hundreds of industrial source-code files with AI,<br>automatically extracted data from industrial drawings,<br>and analyzed millions of rows of large-plant operation data.<br><br>We teach the methodology derived from this process.\u201d',
  'edu.label': 'Programs',
  'edu.title': 'Education Programs',
  'edu.desc': 'A three-tier structure: not everyone needs to become an AI expert.<br>90% create data, 8% build systems, and 2% design strategy.',
  'edu.trackA': 'Track A \u2014 AI Transformation Methodology (Core)',
  'edu.a1h': 'Structuring Work for AI',
  'edu.a1p': 'How to analyze your own work and organize it into a form AI can use. We don\u2019t teach tool usage \u2014 this comes first.',
  'edu.a1m': 'All staff (incl. non-developers) &bull; 4\u20138 hrs &bull; Hands-on',
  'edu.a2h': 'Redesigning AI Workflows',
  'edu.a2p': 'Break work into micro-tasks, classify what AI does vs. what humans do, and design a new workflow.',
  'edu.a2m': 'Department builder candidates &bull; 8\u201316 hrs &bull; Project-based',
  'edu.a3h': 'Enterprise AI Transformation Consulting',
  'edu.a3p': 'Apply the full 4-Phase Framework to build a tailored AI transformation roadmap. Includes the three-tier org model + ROI analysis.',
  'edu.a3m': 'Executives / CTO &bull; 2\u20133 days &bull; Strategy workshop',
  'edu.trackB': 'Track B \u2014 Domain AI in Practice',
  'edu.trackBnote': 'Customized to your industry and domain. Below are applied examples.',
  'edu.b1h': 'Developing Industrial Control Logic with AI',
  'edu.b1p': 'A full-pipeline hands-on session: analyze, validate, and auto-generate control-system source code with AI.',
  'edu.b1m': 'Control/automation engineers &bull; 4\u20138 hrs &bull; Hands-on',
  'edu.b2h': 'Reading &amp; Validating Industrial Drawings with AI',
  'edu.b2p': 'Drawing parsing, symbol recognition, automatic data extraction. Hands-on triple cross-validation: code &harr; docs &harr; drawings.',
  'edu.b2m': 'Design / construction / supervision &bull; 4\u20138 hrs &bull; Hands-on',
  'edu.b3h': 'An Industrial Engineer\u2019s AI Survival Strategy',
  'edu.b3p': '2023 prompts &rarr; 2024 AI tools &rarr; 2025 vibe coding &rarr; 2026 agents. The fast-moving currents of the AI era, and your survival strategy.',
  'edu.b3m': 'Open to all &bull; 1\u20132 hrs &bull; Keynote',
  'survey.label': '3-min survey',
  'survey.title': 'Which AI training<br>is right for your company?',
  'survey.desc': 'Three minutes is all it takes. We\u2019ll assess your current AI maturity and needs,<br>then propose a tailored training direction.',
  'survey.f1': 'Anonymous participation', 'survey.f2': 'Takes 3 minutes', 'survey.f3': 'Summary report provided',
  'survey.btn': 'Take the survey &rarr;',
  'about.label': 'About',
  'about.title': 'The Founder',
  'about.text': 'A career that began in <strong>large-scale industrial systems</strong>, moved through <strong>IoT platforms</strong> and <strong>AI-based edge computing</strong>, and on to <strong>green-energy control solutions</strong> \u2014 a <strong>full-stack industrial architect</strong> who has personally handled design, development, mass production, and commissioning across three industries.<br><br><strong>Built a tech organization of dozens from zero</strong> and <strong>scaled the business more than threefold</strong>. Led multiple <strong>national R&amp;D projects from planning through completion</strong>, earned <strong>global technical certifications</strong>, and drove <strong>international joint research with the United States</strong>.<br><br>Not an engineer who only knows technology, but someone who has <strong>built organizations, grown businesses, and earned validation on the global stage</strong>.<br><br>Now, on top of those 15 years of field experience, <strong>personally proving an AI transformation methodology</strong> \u2014 and turning that validated framework into education and consulting.<br><br><strong style="font-size:1.05em;">\u201cWe teach experience, not theory.<br>Only those who have done it can teach it.\u201d</strong>',
  'about.tl1y': '2024 \u2014 PRESENT',
  'about.tl1t': 'Green Energy \u2014 System Architect &amp; AI Transformation Proof',
  'about.tl1d': 'Designed full-capacity energy control systems + independently built an AI agent system + proved an industrial AI transformation methodology',
  'about.tl2y': '2020 \u2014 2024',
  'about.tl2t': 'IoT &amp; AI \u2014 R&amp;D Center Head',
  'about.tl2d': 'Designed edge-AI platforms, led multiple national R&amp;D programs, conducted international joint research with the US, developed safety monitoring systems',
  'about.tl3y': '2016 \u2014 2020',
  'about.tl3t': 'Large Industrial Systems \u2014 Division Head',
  'about.tl3d': 'Built a tech organization from zero, scaled revenue threefold, earned global technical certifications, founded a corporate R&amp;D institute',
  'about.tl4y': '2011 \u2014 2016',
  'about.tl4t': 'Embedded &amp; System Engineer',
  'about.tl4d': 'Biomedical &rarr; mobile &rarr; industrial systems. Established full-stack capability through multi-domain transitions',
  'contact.label': 'Contact',
  'contact.title': 'Let\u2019s build it together',
  'contact.desc': 'For AI transformation training, enterprise consulting, speaking inquiries,<br>or if you simply want to talk about industrial AI.',
  'contact.email': 'Email',
  'footer.slogan': 'We build AI on the field.'
};

/* ===== \u4e2d\u6587 (\u7b80\u4f53) ===== */
I18N.zh = {
  'meta.title': 'MakeField AI \u2014 \u5728\u73b0\u573a\u521b\u9020 AI',
  'meta.desc': '95%\u7684\u4f01\u4e1a\u5728AI\u843d\u5730\u4e2d\u5931\u8d25\u3002MakeField AI\u8bbe\u8ba1\u7684\u662f\u8f6c\u578b\uff0c\u800c\u975e\u5de5\u5177\u3002',
  'nav.why': '\u4e3a\u4f55', 'nav.solution': '\u89e3\u51b3\u65b9\u6848', 'nav.proof': '\u5b9e\u8bc1', 'nav.programs': '\u8bfe\u7a0b', 'nav.survey': '\u95ee\u5377', 'nav.about': '\u5173\u4e8e', 'nav.contact': '\u8054\u7cfb',
  'hero.badge': '95%\u7684\u4f01\u4e1a\u5728AI\u843d\u5730\u4e2d\u5931\u8d25',
  'hero.h1': '\u6211\u4eec\u4e0d\u6559\u5de5\u5177\uff0c<br><span class="gradient-text">\u6211\u4eec\u8bbe\u8ba1\u8f6c\u578b\u3002</span>',
  'hero.sub': '\u6559\u4eba\u600e\u4e48\u7528ChatGPT\u7684\u65f6\u4ee3\u5df2\u7ecf\u7ed3\u675f\u3002<br>\u4ee515\u5e74\u73b0\u573a\u7ecf\u9a8c\u9a8c\u8bc1\u7684AI\u8f6c\u578b\u65b9\u6cd5\u8bba\uff0c<br>\u5728\u5de5\u4e1a\u73b0\u573a\u521b\u9020\u5b9e\u8d28\u6027\u7684\u6539\u53d8\u3002',
  'hero.btn1': '\u67e5\u770bAI\u8f6c\u578b\u65b9\u6cd5\u8bba', 'hero.btn2': '\u8bca\u65ad\u8d35\u516c\u53f8\u7684AI &rarr;', 'hero.btn3': '\u8054\u7cfb\u6211\u4eec',
  'problem.label': '\u95ee\u9898',
  'problem.title': '\u4e3a\u4ec0\u4e48\u5927\u591a\u6570\u4f01\u4e1a<br>\u5728AI\u843d\u5730\u4e2d\u5931\u8d25',
  'problem.desc': '\u8d2d\u4e70AI\u5de5\u5177\uff0c\u7136\u540e\u544a\u8bc9\u5458\u5de5\u201c\u81ea\u5df1\u60f3\u529e\u6cd5\u7528\u201d\u3002<br>\u4e09\u4e2a\u6708\u540e\uff0c\u5927\u591a\u6570\u4eba\u5f97\u51fa\u7ed3\u8bba\uff1a\u201c\u4e0d\u9002\u5408\u6211\u4eec\u7684\u4e1a\u52a1\u201d\u3002<br>\u95ee\u9898\u4e0d\u5728AI\uff0c\u800c\u5728\u4e8e<strong>\u65b9\u6cd5</strong>\u9519\u4e86\u3002',
  'problem.c1h': '\u653e\u5f03AI\u9879\u76ee\u7684\u4f01\u4e1a',
  'problem.c1p': '\u5df2\u5f15\u5165\u4f46\u56e0\u672a\u80fd\u5b9e\u73b0ROI\u800c\u4e2d\u6b62\u9879\u76ee\u3002\u6700\u5927\u539f\u56e0\u662f\u6570\u636e\u8d28\u91cf\u95ee\u9898\uff0843%\uff09\u3002',
  'problem.c1s': 'Deloitte State of AI 2026',
  'problem.c2h': '\u201c\u4ec5\u9760\u63d0\u793a\u8bcd\u8fdc\u8fdc\u4e0d\u591f\u201d',
  'problem.c2p': '82%\u7684IT\u9886\u5bfc\u8005\u8868\u793a\uff0c\u4ec5\u9760\u63d0\u793a\u8bcd\u5de5\u7a0b\u65e0\u6cd5\u5e26\u6765\u5b9e\u8d28\u6210\u679c\u3002AI\u6027\u80fd\u7531\u6570\u636e\u800c\u975e\u5de5\u5177\u51b3\u5b9a\u3002',
  'problem.c2s': '2026 Context Management Report',
  'problem.c3h': '\u97e9\u56fd\u4e2d\u5c0f\u4f01\u4e1aAI\u91c7\u7528\u7387',
  'problem.c3p': '\u76f8\u6bd4\u5927\u4f01\u4e1a\uff0849.2%\uff09\u6781\u4f4e\u3002\u6700\u5927\u969c\u788d\uff1a\u5bf9\u201cAI\u80fd\u4e3a\u6211\u4eec\u7684\u4e1a\u52a1\u5e26\u6765\u4ec0\u4e48\u5e2e\u52a9\u201d\u7f3a\u4e4f\u5207\u8eab\u4f53\u4f1a\u3002',
  'problem.c3s': '\u5927\u97e9\u5546\u5de5\u4f1a\u8bae\u6240 2025',
  'solution.label': '\u89e3\u51b3\u65b9\u6848',
  'solution.title': 'AI\u653e\u5927\u6218\u7565<br><span class="gradient-text">4 Phase Framework</span>',
  'solution.desc': '\u6211\u4eec\u4e0d\u6559\u5de5\u5177\u7528\u6cd5\uff0c\u800c\u662f<strong>\u628a\u4e1a\u52a1\u77e5\u8bc6\u8f6c\u5316\u4e3aAI\u53ef\u5229\u7528\u7684\u5f62\u6001</strong>\u3002<br>\u4e0d\u662f\u53d6\u4ee3\u5458\u5de5\u7684AI\uff0c\u800c\u662f\u628a\u5458\u5de5<strong>\u653e\u592710\u500d</strong>\u7684AI\u3002<br>\u8ba9\u539f\u672c\u6bcf\u4eba\u505a10\u4ef6\u4e8b\u7684100\u4eba\uff0c\u53d8\u6210\u6bcf\u4eba\u505a100\u4ef6\u4e8b\u7684\u7cfb\u7edf\u5316\u65b9\u6cd5\u8bba\u3002',
  'solution.p1h': '\u77e5\u8bc6\u7ed3\u6784\u5316',
  'solution.p1p': '\u628a\u5458\u5de5\u7684\u9690\u6027\u77e5\u8bc6\uff08\u7ecf\u9a8c\u3001\u8bc0\u7a8d\u3001\u76f4\u89c9\uff09\u8f6c\u5316\u4e3a\u663e\u6027\u77e5\u8bc6\uff08\u6587\u6863\u3001\u6570\u636e\u3001\u89c4\u5219\uff09\u3002\u6b64\u9636\u6bb5\u4e0d\u6559AI\u5de5\u5177\u7528\u6cd5\u3002',
  'solution.p2h': '\u4e2d\u592e\u77e5\u8bc6\u5e93',
  'solution.p2p': '\u628a\u7ed3\u6784\u5316\u77e5\u8bc6\u6574\u5408\u5230\u4e2d\u592e\u7cfb\u7edf\u3002\u5404\u90e8\u95e8\u7684\u6d41\u7a0b\u56fe\u3001\u51b3\u7b56\u89c4\u5219\u3001\u6545\u969c\u6392\u67e5\u5e93\u8fde\u4e3a\u4e00\u4f53\u3002',
  'solution.p3h': 'AI\u7cfb\u7edf\u5185\u5316',
  'solution.p3p': '\u5728\u79ef\u7d2f\u7684\u77e5\u8bc6\u4e4b\u4e0a\u6784\u5efaAI\u5de5\u4f5c\u6d41\u3002\u5458\u5de5\u65e0\u9700\u7406\u89e3\u6280\u672f\uff0c\u50cf\u4f7f\u7528ERP\u4e00\u6837\u4f7f\u7528\u5b83\u3002',
  'solution.p4h': '\u6536\u83b7\u653e\u5927\u6210\u679c',
  'solution.p4p': '\u4eba\u5747\u751f\u4ea7\u529b\u63d0\u53473~10\u500d\u3002\u65e0\u9700\u65b0\u589e\u62db\u8058\u5373\u53ef\u6269\u5f20\u4e1a\u52a1\uff0c\u6838\u5fc3\u4eba\u5458\u79bb\u804c\u540e\u77e5\u8bc6\u4f9d\u7136\u4fdd\u7559\u5728\u7cfb\u7edf\u4e2d\u3002',
  'solution.quote': '\u201c\u4e0d\u90a3\u4e48\u806a\u660e\u7684AI\uff0b\u597d\u6570\u636e\uff0c<br>\u80dc\u8fc7\u806a\u660e\u7684AI\uff0b\u574f\u6570\u636e\u3002<br>\u628a\u5458\u5de5\u7684\u4e1a\u52a1\u77e5\u8bc6\u7ed3\u6784\u5316\uff0c\u662f\u4e00\u5207AI\u6218\u7565\u7684\u8d77\u70b9\u3002\u201d',
  'proof.label': '\u5b9e\u8bc1',
  'proof.title': '\u6211\u4eec\u4eb2\u81ea\u505a\u8fc7\u3002<br><span class="gradient-text">\u5df2\u8fdb\u884c\u5230\u7b2c<span id="days-count">0</span>\u5929\u3002</span>',
  'proof.desc': '\u8fd9\u4e0d\u662f\u7406\u8bba\u3002\u800c\u662f\u4e00\u4f4d15\u5e74\u8d44\u5386\u7684\u5de5\u4e1a\u5de5\u7a0b\u5e08\u5728\u73b0\u573a\u5de5\u4f5c\u4e2d<br>\u4eb2\u81ea\u5e94\u7528\u3001\u6d4b\u91cf\u3001\u9a8c\u8bc1AI\u8f6c\u578b\u65b9\u6cd5\u8bba\u7684\u8fdb\u884c\u65f6\u8bb0\u5f55\u3002',
  'proof.s1': '\u6784\u5efa\u7684AI\u667a\u80fd\u4f53', 'proof.s2': '\u77e5\u8bc6\u5e93\u6587\u6863', 'proof.s3': '\u884c\u7ed3\u6784\u5316\u77e5\u8bc6', 'proof.s4': '\u7d2f\u8ba1\u5904\u7406\u7684Token', 'proof.s5': '\u5e74\u73b0\u573a\u7ecf\u9a8c', 'proof.s6': '\u5929\u5b9e\u8bc1\u8fdb\u884c\u4e2d',
  'proof.quote': '\u201c\u4e0eAI\u4ea4\u53c9\u9a8c\u8bc1\u4e86\u6570\u767e\u4e2a\u5de5\u4e1a\u6e90\u4ee3\u7801\u6587\u4ef6\uff0c<br>\u4ece\u5de5\u4e1a\u56fe\u7eb8\u4e2d\u81ea\u52a8\u63d0\u53d6\u6570\u636e\uff0c<br>\u5206\u6790\u4e86\u5927\u578b\u5de5\u5382\u8fd0\u884c\u6570\u636e\u6570\u767e\u4e07\u884c\u3002<br><br>\u6211\u4eec\u6559\u6388\u7684\uff0c\u6b63\u662f\u4ece\u8fd9\u4e00\u8fc7\u7a0b\u4e2d\u63d0\u70bc\u51fa\u7684\u65b9\u6cd5\u8bba\u3002\u201d',
  'edu.label': '\u8bfe\u7a0b',
  'edu.title': '\u6559\u80b2\u8bfe\u7a0b',
  'edu.desc': '\u4e09\u5c42\u7ed3\u6784\uff1a\u4e0d\u9700\u8981\u5168\u5458\u6210\u4e3aAI\u4e13\u5bb6\u3002<br>90%\u7684\u4eba\u521b\u9020\u6570\u636e\uff0c8%\u7684\u4eba\u6784\u5efa\u7cfb\u7edf\uff0c2%\u7684\u4eba\u8bbe\u8ba1\u6218\u7565\u3002',
  'edu.trackA': 'Track A \u2014 AI\u8f6c\u578b\u65b9\u6cd5\u8bba\uff08\u6838\u5fc3\uff09',
  'edu.a1h': '\u9762\u5411AI\u7684\u4e1a\u52a1\u7ed3\u6784\u5316',
  'edu.a1p': '\u5206\u6790\u81ea\u5df1\u7684\u5de5\u4f5c\uff0c\u5e76\u6574\u7406\u6210AI\u53ef\u5229\u7528\u7684\u5f62\u6001\u3002\u6211\u4eec\u4e0d\u6559\u5de5\u5177\u7528\u6cd5\u2014\u2014\u8fd9\u624d\u662f\u7b2c\u4e00\u6b65\u3002',
  'edu.a1m': '\u5168\u4f53\u5458\u5de5\uff08\u542b\u975e\u5f00\u53d1\u8005\uff09&bull; 4~8\u5c0f\u65f6 &bull; \u5b9e\u64cd\u4e3a\u4e3b',
  'edu.a2h': '\u91cd\u65b0\u8bbe\u8ba1AI\u5de5\u4f5c\u6d41',
  'edu.a2p': '\u628a\u5de5\u4f5c\u5206\u89e3\u4e3a\u5fae\u4efb\u52a1\uff0c\u533a\u5206AI\u505a\u4ec0\u4e48\u3001\u4eba\u505a\u4ec0\u4e48\uff0c\u8bbe\u8ba1\u5168\u65b0\u7684\u5de5\u4f5c\u6d41\u3002',
  'edu.a2m': '\u90e8\u95e8\u6784\u5efa\u8005\u5019\u9009 &bull; 8~16\u5c0f\u65f6 &bull; \u9879\u76ee\u5236',
  'edu.a3h': '\u4f01\u4e1aAI\u8f6c\u578b\u54a8\u8be2',
  'edu.a3p': '\u5e94\u7528\u5b8c\u6574\u76844Phase\u6846\u67b6\uff0c\u5236\u5b9a\u4f01\u4e1a\u5b9a\u5236\u7684AI\u8f6c\u578b\u8def\u7ebf\u56fe\u3002\u542b\u4e09\u5c42\u7ec4\u7ec7\u6a21\u578b\uff0bROI\u5206\u6790\u3002',
  'edu.a3m': '\u9ad8\u7ba1 / CTO &bull; 2~3\u5929 &bull; \u6218\u7565\u5de5\u4f5c\u574a',
  'edu.trackB': 'Track B \u2014 \u9886\u57dfAI\u5b9e\u6218',
  'edu.trackBnote': '\u6839\u636e\u8d35\u516c\u53f8\u7684\u884c\u4e1a\u4e0e\u9886\u57df\u5b9a\u5236\u3002\u4ee5\u4e0b\u4e3a\u5e94\u7528\u6848\u4f8b\u3002',
  'edu.b1h': '\u7528AI\u5f00\u53d1\u5de5\u4e1a\u63a7\u5236\u903b\u8f91',
  'edu.b1p': '\u7528AI\u5206\u6790\u3001\u9a8c\u8bc1\u3001\u81ea\u52a8\u751f\u6210\u63a7\u5236\u7cfb\u7edf\u6e90\u4ee3\u7801\u7684\u5168\u6d41\u7a0b\u5b9e\u64cd\u3002',
  'edu.b1m': '\u63a7\u5236/\u81ea\u52a8\u5316\u5de5\u7a0b\u5e08 &bull; 4~8\u5c0f\u65f6 &bull; \u5b9e\u64cd\u578b',
  'edu.b2h': '\u7528AI\u8bfb\u53d6\u5e76\u9a8c\u8bc1\u5de5\u4e1a\u56fe\u7eb8',
  'edu.b2p': '\u56fe\u7eb8\u89e3\u6790\u3001\u7b26\u53f7\u8bc6\u522b\u3001\u6570\u636e\u81ea\u52a8\u63d0\u53d6\u3002\u4ee3\u7801&harr;\u6587\u6863&harr;\u56fe\u7eb8\u4e09\u91cd\u4ea4\u53c9\u9a8c\u8bc1\u5b9e\u64cd\u3002',
  'edu.b2m': '\u8bbe\u8ba1 / \u65bd\u5de5 / \u76d1\u7406 &bull; 4~8\u5c0f\u65f6 &bull; \u5b9e\u64cd\u578b',
  'edu.b3h': '\u5de5\u4e1a\u5de5\u7a0b\u5e08\u7684AI\u751f\u5b58\u7b56\u7565',
  'edu.b3p': '2023\u63d0\u793a\u8bcd &rarr; 2024 AI\u5de5\u5177 &rarr; 2025 Vibe Coding &rarr; 2026\u667a\u80fd\u4f53\u3002AI\u65f6\u4ee3\u98de\u901f\u53d8\u5316\u7684\u6d6a\u6f6e\uff0c\u4ee5\u53ca\u4f60\u7684\u751f\u5b58\u7b56\u7565\u3002',
  'edu.b3m': '\u9762\u5411\u6240\u6709\u4eba &bull; 1~2\u5c0f\u65f6 &bull; \u6f14\u8bb2',
  'survey.label': '3\u5206\u949f\u95ee\u5377',
  'survey.title': '\u4ec0\u4e48\u6837\u7684AI\u57f9\u8bad<br>\u6700\u9002\u5408\u8d35\u516c\u53f8\uff1f',
  'survey.desc': '3\u5206\u949f\u8db3\u77e3\u3002\u6211\u4eec\u5c06\u4e86\u89e3\u8d35\u516c\u53f8\u5f53\u524d\u7684AI\u8fd0\u7528\u6c34\u5e73\u4e0e\u9700\u6c42\uff0c<br>\u4e3a\u60a8\u63d0\u51fa\u91cf\u8eab\u5b9a\u5236\u7684\u57f9\u8bad\u65b9\u5411\u3002',
  'survey.f1': '\u53ef\u533f\u540d\u53c2\u4e0e', 'survey.f2': '\u8017\u65f63\u5206\u949f', 'survey.f3': '\u63d0\u4f9b\u7ed3\u679c\u6458\u8981\u62a5\u544a',
  'survey.btn': '\u53c2\u4e0e\u95ee\u5377 &rarr;',
  'about.label': '\u5173\u4e8e',
  'about.title': '\u521b\u59cb\u4eba',
  'about.text': '\u804c\u4e1a\u751f\u6daf\u59cb\u4e8e<strong>\u5927\u578b\u5de5\u4e1a\u7cfb\u7edf</strong>\uff0c\u5386\u7ecf<strong>\u7269\u8054\u7f51\u5e73\u53f0</strong>\u4e0e<strong>\u57fa\u4e8eAI\u7684\u8fb9\u7f18\u8ba1\u7b97</strong>\uff0c\u76f4\u81f3<strong>\u7eff\u8272\u80fd\u6e90\u63a7\u5236\u89e3\u51b3\u65b9\u6848</strong>\u2014\u2014\u8d2f\u7a7f\u4e09\u5927\u884c\u4e1a\uff0c\u4eb2\u81ea\u5b8c\u6210\u8bbe\u8ba1\u3001\u5f00\u53d1\u3001\u91cf\u4ea7\u4e0e\u8bd5\u8fd0\u884c\u7684<strong>\u5168\u6808\u5de5\u4e1a\u67b6\u6784\u5e08</strong>\u3002<br><br><strong>\u4ece\u96f6\u7ec4\u5efa\u6570\u5341\u4eba\u89c4\u6a21\u7684\u6280\u672f\u56e2\u961f</strong>\uff0c\u5c06\u4e1a\u52a1<strong>\u6269\u5f203\u500d\u4ee5\u4e0a</strong>\u3002\u4e3b\u5bfc\u591a\u9879<strong>\u56fd\u5bb6\u7ea7\u7814\u53d1\u9879\u76ee\u4ece\u7acb\u9879\u5230\u5b8c\u6210</strong>\uff0c\u53d6\u5f97<strong>\u56fd\u9645\u6280\u672f\u8ba4\u8bc1</strong>\uff0c\u5e76\u4e3b\u6301<strong>\u4e0e\u7f8e\u56fd\u7684\u56fd\u9645\u5171\u540c\u7814\u7a76</strong>\u3002<br><br>\u4e0d\u662f\u53ea\u61c2\u6280\u672f\u7684\u5de5\u7a0b\u5e08\uff0c\u800c\u662f<strong>\u7ec4\u5efa\u8fc7\u7ec4\u7ec7\u3001\u505a\u5927\u8fc7\u4e1a\u52a1\u3001\u5728\u5168\u7403\u821e\u53f0\u4e0a\u5f97\u5230\u9a8c\u8bc1</strong>\u7684\u4eba\u3002<br><br>\u5982\u4eca\uff0c\u5728\u8fd915\u5e74\u73b0\u573a\u7ecf\u9a8c\u4e4b\u4e0a\uff0c\u4ed6\u6b63<strong>\u4eb2\u81ea\u9a8c\u8bc1AI\u8f6c\u578b\u65b9\u6cd5\u8bba</strong>\uff0c\u5e76\u5c06\u7ecf\u8fc7\u9a8c\u8bc1\u7684\u6846\u67b6\u8f6c\u5316\u4e3a\u6559\u80b2\u4e0e\u54a8\u8be2\u3002<br><br><strong style="font-size:1.05em;">\u201c\u6211\u4eec\u6559\u7684\u662f\u7ecf\u9a8c\uff0c\u800c\u975e\u7406\u8bba\u3002<br>\u552f\u6709\u505a\u8fc7\u7684\u4eba\uff0c\u624d\u80fd\u6559\u3002\u201d</strong>',
  'about.tl1y': '2024 \u2014 \u81f3\u4eca',
  'about.tl1t': '\u7eff\u8272\u80fd\u6e90 \u2014 \u7cfb\u7edf\u67b6\u6784\u5e08 &amp; AI\u8f6c\u578b\u5b9e\u8bc1',
  'about.tl1d': '\u5168\u5bb9\u91cf\u80fd\u6e90\u63a7\u5236\u7cfb\u7edf\u8bbe\u8ba1 + \u72ec\u7acb\u6784\u5efaAI\u667a\u80fd\u4f53\u7cfb\u7edf + \u5de5\u4e1aAI\u8f6c\u578b\u65b9\u6cd5\u8bba\u5b9e\u8bc1',
  'about.tl2y': '2020 \u2014 2024',
  'about.tl2t': '\u7269\u8054\u7f51 &amp; AI \u2014 \u7814\u53d1\u4e2d\u5fc3\u8d1f\u8d23\u4eba',
  'about.tl2d': '\u8fb9\u7f18AI\u5e73\u53f0\u8bbe\u8ba1\u3001\u4e3b\u5bfc\u591a\u9879\u56fd\u5bb6\u7ea7\u7814\u53d1\u3001\u7f8e\u56fd\u56fd\u9645\u5171\u540c\u7814\u7a76\u3001\u5b89\u5168\u76d1\u6d4b\u7cfb\u7edf\u5f00\u53d1',
  'about.tl3y': '2016 \u2014 2020',
  'about.tl3t': '\u5927\u578b\u5de5\u4e1a\u7cfb\u7edf \u2014 \u4e8b\u4e1a\u90e8\u603b\u7ba1',
  'about.tl3d': '\u6280\u672f\u56e2\u961f\u4ece\u96f6\u7ec4\u5efa\u3001\u8425\u65363\u500d\u589e\u957f\u3001\u83b7\u5f97\u56fd\u9645\u6280\u672f\u8ba4\u8bc1\u3001\u8bbe\u7acb\u4f01\u4e1a\u9644\u8bbe\u7814\u7a76\u6240',
  'about.tl4y': '2011 \u2014 2016',
  'about.tl4t': '\u5d4c\u5165\u5f0f &amp; \u7cfb\u7edf\u5de5\u7a0b\u5e08',
  'about.tl4d': '\u751f\u7269\u533b\u5b66\u5de5\u7a0b &rarr; \u79fb\u52a8 &rarr; \u5de5\u4e1a\u7cfb\u7edf\u3002\u901a\u8fc7\u591a\u9886\u57df\u8f6c\u6362\u786e\u7acb\u5168\u6808\u80fd\u529b',
  'contact.label': '\u8054\u7cfb',
  'contact.title': '\u4e00\u8d77\u6765\u6253\u9020',
  'contact.desc': '\u5982\u9700AI\u8f6c\u578b\u57f9\u8bad\u3001\u4f01\u4e1a\u54a8\u8be2\u3001\u6f14\u8bb2\u9080\u7ea6\uff0c<br>\u6216\u60f3\u804a\u804a\u5de5\u4e1aAI\u2014\u2014',
  'contact.email': '\u90ae\u4ef6',
  'footer.slogan': '\u5728\u73b0\u573a\u521b\u9020AI\u3002'
};

/* ===== \u65e5\u672c\u8a9e ===== */
I18N.ja = {
  'meta.title': 'MakeField AI \u2014 \u73fe\u5834\u306bAI\u3092\u751f\u307f\u51fa\u3059',
  'meta.desc': '95%\u306e\u4f01\u696d\u304cAI\u5c0e\u5165\u306b\u5931\u6557\u3057\u307e\u3059\u3002MakeField AI\u306f\u9053\u5177\u3067\u306f\u306a\u304f\u5909\u9769\u3092\u8a2d\u8a08\u3057\u307e\u3059\u3002',
  'nav.why': '\u306a\u305c', 'nav.solution': '\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3', 'nav.proof': '\u5b9f\u8a3c', 'nav.programs': '\u30d7\u30ed\u30b0\u30e9\u30e0', 'nav.survey': '\u30a2\u30f3\u30b1\u30fc\u30c8', 'nav.about': '\u7d39\u4ecb', 'nav.contact': '\u304a\u554f\u3044\u5408\u308f\u305b',
  'hero.badge': '95%\u306e\u4f01\u696d\u304cAI\u5c0e\u5165\u306b\u5931\u6557\u3057\u3066\u3044\u307e\u3059',
  'hero.h1': '\u30c4\u30fc\u30eb\u306f\u6559\u3048\u307e\u305b\u3093\u3002<br><span class="gradient-text">\u5909\u9769\u3092\u8a2d\u8a08\u3057\u307e\u3059\u3002</span>',
  'hero.sub': 'ChatGPT\u306e\u4f7f\u3044\u65b9\u3092\u6559\u3048\u308b\u6642\u4ee3\u306f\u7d42\u308f\u308a\u307e\u3057\u305f\u3002<br>15\u5e74\u306e\u73fe\u5834\u7d4c\u9a13\u3067\u5b9f\u8a3c\u3055\u308c\u305fAI\u5909\u9769\u30e1\u30bd\u30c3\u30c9\u3067\u3001<br>\u7523\u696d\u73fe\u5834\u306b\u5b9f\u8cea\u7684\u306a\u5909\u5316\u3092\u751f\u307f\u51fa\u3057\u307e\u3059\u3002',
  'hero.btn1': 'AI\u5909\u9769\u30e1\u30bd\u30c3\u30c9\u3092\u898b\u308b', 'hero.btn2': '\u81ea\u793e\u306eAI\u8a3a\u65ad &rarr;', 'hero.btn3': '\u304a\u554f\u3044\u5408\u308f\u305b',
  'problem.label': '\u8ab2\u984c',
  'problem.title': '\u306a\u305c\u591a\u304f\u306e\u4f01\u696d\u306f<br>AI\u5c0e\u5165\u306b\u5931\u6557\u3059\u308b\u306e\u304b',
  'problem.desc': 'AI\u30c4\u30fc\u30eb\u3092\u8cfc\u5165\u3057\u3001\u793e\u54e1\u306b\u300c\u81ea\u5206\u3067\u4f7f\u3044\u3053\u306a\u305b\u300d\u3068\u8a00\u3046\u3002<br>3\u304b\u6708\u5f8c\u3001\u591a\u304f\u306f\u300c\u3046\u3061\u306e\u696d\u52d9\u306b\u306f\u5408\u308f\u306a\u3044\u300d\u3068\u7d50\u8ad6\u3065\u3051\u307e\u3059\u3002<br>\u554f\u984c\u306fAI\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002<strong>\u30a2\u30d7\u30ed\u30fc\u30c1</strong>\u304c\u9593\u9055\u3063\u3066\u3044\u308b\u306e\u3067\u3059\u3002',
  'problem.c1h': 'AI\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u65ad\u5ff5\u3057\u305f\u4f01\u696d',
  'problem.c1p': '\u5c0e\u5165\u3057\u305f\u3082\u306e\u306eROI\u3092\u9054\u6210\u3067\u304d\u305a\u4e2d\u6b62\u3002\u6700\u5927\u306e\u539f\u56e0\u306f\u30c7\u30fc\u30bf\u54c1\u8cea\u306e\u554f\u984c\uff0843%\uff09\u3002',
  'problem.c1s': 'Deloitte State of AI 2026',
  'problem.c2h': '\u300c\u30d7\u30ed\u30f3\u30d7\u30c8\u3060\u3051\u3067\u306f\u8db3\u308a\u306a\u3044\u300d',
  'problem.c2p': 'IT\u30ea\u30fc\u30c0\u30fc\u306e82%\u304c\u3001\u30d7\u30ed\u30f3\u30d7\u30c8\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u3060\u3051\u3067\u306f\u5b9f\u8cea\u7684\u306a\u6210\u679c\u3092\u51fa\u305b\u306a\u3044\u3068\u56de\u7b54\u3002AI\u306e\u6027\u80fd\u306f\u9053\u5177\u3067\u306f\u306a\u304f\u30c7\u30fc\u30bf\u304c\u6c7a\u3081\u308b\u3002',
  'problem.c2s': '2026 Context Management Report',
  'problem.c3h': '\u97d3\u56fd\u4e2d\u5c0f\u4f01\u696d\u306eAI\u5c0e\u5165\u7387',
  'problem.c3p': '\u5927\u4f01\u696d\uff0849.2%\uff09\u3068\u6bd4\u3079\u6975\u3081\u3066\u4f4e\u3044\u5c0e\u5165\u7387\u3002\u6700\u5927\u306e\u58c1\u306f\u300cAI\u304c\u81ea\u793e\u306e\u4e8b\u696d\u306b\u3069\u3046\u5f79\u7acb\u3064\u304b\u300d\u3068\u3044\u3046\u5b9f\u611f\u306e\u6b20\u5982\u3002',
  'problem.c3s': '\u5927\u97d3\u5546\u5de5\u4f1a\u8b70\u6240 2025',
  'solution.label': '\u89e3\u6c7a\u7b56',
  'solution.title': 'AI\u5897\u5e45\u6226\u7565<br><span class="gradient-text">4 Phase Framework</span>',
  'solution.desc': '\u30c4\u30fc\u30eb\u306e\u4f7f\u3044\u65b9\u3092\u6559\u3048\u308b\u4ee3\u308f\u308a\u306b\u3001<strong>\u696d\u52d9\u77e5\u8b58\u3092AI\u304c\u6d3b\u7528\u3067\u304d\u308b\u5f62\u306b\u5909\u63db</strong>\u3057\u307e\u3059\u3002<br>\u793e\u54e1\u3092\u7f6e\u304d\u63db\u3048\u308bAI\u3067\u306f\u306a\u304f\u3001\u793e\u54e1\u3092<strong>10\u500d\u306b\u5897\u5e45</strong>\u3059\u308bAI\u3002<br>100\u4eba\u304c\u305d\u308c\u305e\u308c10\u4ef6\u3053\u306a\u3057\u3066\u3044\u305f\u4ed5\u4e8b\u3092\u3001100\u4ef6\u3053\u306a\u305b\u308b\u3088\u3046\u306b\u3059\u308b\u4f53\u7cfb\u7684\u30e1\u30bd\u30c3\u30c9\u3067\u3059\u3002',
  'solution.p1h': '\u77e5\u8b58\u306e\u5f62\u5f0f\u5316',
  'solution.p1p': '\u793e\u54e1\u306e\u6697\u9ed9\u77e5\uff08\u7d4c\u9a13\u30fb\u30ce\u30a6\u30cf\u30a6\u30fb\u52d8\uff09\u3092\u5f62\u5f0f\u77e5\uff08\u6587\u66f8\u30fb\u30c7\u30fc\u30bf\u30fb\u30eb\u30fc\u30eb\uff09\u3078\u5909\u63db\u3057\u307e\u3059\u3002\u3053\u306e\u6bb5\u968e\u3067\u306fAI\u30c4\u30fc\u30eb\u306e\u4f7f\u3044\u65b9\u306f\u6559\u3048\u307e\u305b\u3093\u3002',
  'solution.p2h': '\u4e2d\u592e\u77e5\u8b58DB',
  'solution.p2p': '\u5f62\u5f0f\u5316\u3057\u305f\u77e5\u8b58\u3092\u4e2d\u592e\u30b7\u30b9\u30c6\u30e0\u306b\u7d71\u5408\u3057\u307e\u3059\u3002\u90e8\u9580\u3054\u3068\u306e\u30d7\u30ed\u30bb\u30b9\u30de\u30c3\u30d7\u3001\u610f\u601d\u6c7a\u5b9a\u30eb\u30fc\u30eb\u3001\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0DB\u304c\u4e00\u3064\u306b\u7e4b\u304c\u308a\u307e\u3059\u3002',
  'solution.p3h': 'AI\u30b7\u30b9\u30c6\u30e0\u306e\u5185\u88fd\u5316',
  'solution.p3p': '\u84c4\u7a4d\u3055\u308c\u305f\u77e5\u8b58\u306e\u4e0a\u306bAI\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002\u793e\u54e1\u306f\u6280\u8853\u3092\u7406\u89e3\u3059\u308b\u5fc5\u8981\u306a\u304f\u3001ERP\u306e\u3088\u3046\u306b\u4f7f\u3048\u307e\u3059\u3002',
  'solution.p4h': '\u5897\u5e45\u306e\u53ce\u7a6b',
  'solution.p4p': '\u4e00\u4eba\u3042\u305f\u308a\u306e\u751f\u7523\u6027\u304c3\u301c10\u500d\u3002\u65b0\u898f\u63a1\u7528\u306a\u3057\u3067\u4e8b\u696d\u3092\u62e1\u5927\u3057\u3001\u30ad\u30fc\u30d1\u30fc\u30bd\u30f3\u304c\u9000\u8077\u3057\u3066\u3082\u77e5\u8b58\u306f\u30b7\u30b9\u30c6\u30e0\u306b\u6b8b\u308a\u307e\u3059\u3002',
  'solution.quote': '\u300c\u8ce2\u304f\u306a\u3044AI\uff0b\u826f\u3044\u30c7\u30fc\u30bf\u306f\u3001<br>\u8ce2\u3044AI\uff0b\u60aa\u3044\u30c7\u30fc\u30bf\u306b\u52dd\u3061\u307e\u3059\u3002<br>\u793e\u54e1\u306e\u696d\u52d9\u77e5\u8b58\u3092\u5f62\u5f0f\u5316\u3059\u308b\u3053\u3068\u304c\u3001\u3059\u3079\u3066\u306eAI\u6226\u7565\u306e\u51fa\u767a\u70b9\u3067\u3059\u3002\u300d',
  'proof.label': '\u5b9f\u8a3c',
  'proof.title': '\u81ea\u5206\u3067\u3084\u3063\u3066\u307f\u307e\u3057\u305f\u3002<br><span class="gradient-text"><span id="days-count">0</span>\u65e5\u76ee\u3001\u9032\u884c\u4e2d\u3002</span>',
  'proof.desc': '\u7406\u8ad6\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u300215\u5e74\u76ee\u306e\u7523\u696d\u30a8\u30f3\u30b8\u30cb\u30a2\u304c\u73fe\u5834\u696d\u52d9\u3067<br>AI\u5909\u9769\u30e1\u30bd\u30c3\u30c9\u3092\u81ea\u3089\u9069\u7528\u3057\u3001\u6e2c\u5b9a\u3057\u3001\u691c\u8a3c\u3057\u3066\u3044\u308b\u73fe\u5728\u9032\u884c\u5f62\u306e\u8a18\u9332\u3067\u3059\u3002',
  'proof.s1': '\u69cb\u7bc9\u3057\u305fAI\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8', 'proof.s2': '\u30ca\u30ec\u30c3\u30b8\u30d9\u30fc\u30b9\u6587\u66f8', 'proof.s3': '\u884c\u306e\u5f62\u5f0f\u5316\u3055\u308c\u305f\u77e5\u8b58', 'proof.s4': '\u7d2f\u8a08\u51e6\u7406\u30c8\u30fc\u30af\u30f3', 'proof.s5': '\u5e74\u306e\u73fe\u5834\u7d4c\u9a13', 'proof.s6': '\u65e5\u76ee\u306e\u5b9f\u8a3c\u9032\u884c\u4e2d',
  'proof.quote': '\u300c\u6570\u767e\u672c\u306e\u7523\u696d\u7528\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092AI\u3068\u76f8\u4e92\u691c\u8a3c\u3057\u3001<br>\u7523\u696d\u7528\u56f3\u9762\u304b\u3089\u30c7\u30fc\u30bf\u3092\u81ea\u52d5\u62bd\u51fa\u3057\u3001<br>\u5927\u898f\u6a21\u30d7\u30e9\u30f3\u30c8\u306e\u904b\u8ee2\u30c7\u30fc\u30bf\u6570\u767e\u4e07\u884c\u3092\u5206\u6790\u3057\u307e\u3057\u305f\u3002<br><br>\u3053\u306e\u904e\u7a0b\u3067\u5c0e\u304d\u51fa\u3057\u305f\u30e1\u30bd\u30c3\u30c9\u3092\u6559\u3048\u307e\u3059\u3002\u300d',
  'edu.label': '\u30d7\u30ed\u30b0\u30e9\u30e0',
  'edu.title': '\u6559\u80b2\u30d7\u30ed\u30b0\u30e9\u30e0',
  'edu.desc': '3\u968e\u5c64\u69cb\u9020\uff1a\u5168\u793e\u54e1\u304cAI\u5c02\u9580\u5bb6\u306b\u306a\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002<br>90%\u304c\u30c7\u30fc\u30bf\u3092\u4f5c\u308a\u30018%\u304c\u30b7\u30b9\u30c6\u30e0\u3092\u69cb\u7bc9\u3057\u30012%\u304c\u6226\u7565\u3092\u8a2d\u8a08\u3057\u307e\u3059\u3002',
  'edu.trackA': 'Track A \u2014 AI\u5909\u9769\u30e1\u30bd\u30c3\u30c9\uff08\u30b3\u30a2\uff09',
  'edu.a1h': 'AI\u306e\u305f\u3081\u306e\u696d\u52d9\u5f62\u5f0f\u5316',
  'edu.a1p': '\u81ea\u5206\u306e\u696d\u52d9\u3092\u5206\u6790\u3057\u3001AI\u304c\u6d3b\u7528\u3067\u304d\u308b\u5f62\u306b\u6574\u7406\u3059\u308b\u65b9\u6cd5\u3002\u30c4\u30fc\u30eb\u306e\u4f7f\u3044\u65b9\u306f\u6559\u3048\u307e\u305b\u3093\u3002\u3053\u308c\u304c\u6700\u521d\u3067\u3059\u3002',
  'edu.a1m': '\u5168\u793e\u54e1\uff08\u975e\u958b\u767a\u8005\u542b\u3080\uff09&bull; 4\u301c8\u6642\u9593 &bull; \u5b9f\u7fd2\u4e2d\u5fc3',
  'edu.a2h': 'AI\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u518d\u8a2d\u8a08',
  'edu.a2p': '\u696d\u52d9\u3092\u30de\u30a4\u30af\u30ed\u30bf\u30b9\u30af\u306b\u5206\u89e3\u3057\u3001AI\u304c\u3084\u308b\u3053\u3068\uff0f\u4eba\u304c\u3084\u308b\u3053\u3068\u3092\u5206\u985e\u3057\u3066\u3001\u65b0\u3057\u3044\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u8a2d\u8a08\u3057\u307e\u3059\u3002',
  'edu.a2m': '\u90e8\u9580\u30d3\u30eb\u30c0\u30fc\u5019\u88dc &bull; 8\u301c16\u6642\u9593 &bull; \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u578b',
  'edu.a3h': '\u4f01\u696dAI\u5909\u9769\u30b3\u30f3\u30b5\u30eb\u30c6\u30a3\u30f3\u30b0',
  'edu.a3p': '4Phase\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u5168\u4f53\u3092\u9069\u7528\u3057\u3001\u4f01\u696d\u306b\u5408\u308f\u305b\u305fAI\u5909\u9769\u30ed\u30fc\u30c9\u30de\u30c3\u30d7\u3092\u7b56\u5b9a\u3057\u307e\u3059\u30023\u968e\u5c64\u7d44\u7e54\u30e2\u30c7\u30eb\uff0bROI\u5206\u6790\u3092\u542b\u3080\u3002',
  'edu.a3m': '\u7d4c\u55b6\u5c64 / CTO &bull; 2\u301c3\u65e5 &bull; \u6226\u7565\u30ef\u30fc\u30af\u30b7\u30e7\u30c3\u30d7',
  'edu.trackB': 'Track B \u2014 \u30c9\u30e1\u30a4\u30f3AI\u5b9f\u8df5',
  'edu.trackBnote': '\u5fa1\u793e\u306e\u696d\u7a2e\u30fb\u30c9\u30e1\u30a4\u30f3\u306b\u5408\u308f\u305b\u3066\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306f\u9069\u7528\u4e8b\u4f8b\u3067\u3059\u3002',
  'edu.b1h': 'AI\u3067\u7523\u696d\u7528\u5236\u5fa1\u30ed\u30b8\u30c3\u30af\u3092\u958b\u767a\u3059\u308b',
  'edu.b1p': '\u5236\u5fa1\u30b7\u30b9\u30c6\u30e0\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092AI\u3067\u5206\u6790\u30fb\u691c\u8a3c\u30fb\u81ea\u52d5\u751f\u6210\u3059\u308b\u30d5\u30eb\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u5b9f\u7fd2\u3002',
  'edu.b1m': '\u5236\u5fa1/\u81ea\u52d5\u5316\u30a8\u30f3\u30b8\u30cb\u30a2 &bull; 4\u301c8\u6642\u9593 &bull; \u5b9f\u7fd2\u578b',
  'edu.b2h': 'AI\u3067\u7523\u696d\u7528\u56f3\u9762\u3092\u8aad\u307f\u30fb\u691c\u8a3c\u3059\u308b',
  'edu.b2p': '\u56f3\u9762\u30d1\u30fc\u30b9\u3001\u30b7\u30f3\u30dc\u30eb\u8a8d\u8b58\u3001\u30c7\u30fc\u30bf\u81ea\u52d5\u62bd\u51fa\u3002\u30b3\u30fc\u30c9&harr;\u6587\u66f8&harr;\u56f3\u9762\u306e\u4e09\u91cd\u76f8\u4e92\u691c\u8a3c\u5b9f\u7fd2\u3002',
  'edu.b2m': '\u8a2d\u8a08 / \u65bd\u5de5 / \u76e3\u7406 &bull; 4\u301c8\u6642\u9593 &bull; \u5b9f\u7fd2\u578b',
  'edu.b3h': '\u7523\u696d\u30a8\u30f3\u30b8\u30cb\u30a2\u306eAI\u751f\u5b58\u6226\u7565',
  'edu.b3p': '2023\u30d7\u30ed\u30f3\u30d7\u30c8 &rarr; 2024 AI\u30c4\u30fc\u30eb &rarr; 2025\u30d0\u30a4\u30d6\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0 &rarr; 2026\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3002\u6025\u901f\u306b\u5909\u308f\u308bAI\u6642\u4ee3\u306e\u6f6e\u6d41\u3068\u3001\u3042\u306a\u305f\u306e\u751f\u5b58\u6226\u7565\u3002',
  'edu.b3m': '\u5168\u5bfe\u8c61 &bull; 1\u301c2\u6642\u9593 &bull; \u8b1b\u6f14',
  'survey.label': '3\u5206\u30a2\u30f3\u30b1\u30fc\u30c8',
  'survey.title': '\u5fa1\u793e\u306b\u5408\u3046<br>AI\u6559\u80b2\u306f\u3069\u308c\u3067\u3057\u3087\u3046\uff1f',
  'survey.desc': '3\u5206\u3067\u5341\u5206\u3067\u3059\u3002\u5fa1\u793e\u306e\u73fe\u5728\u306eAI\u6d3b\u7528\u30ec\u30d9\u30eb\u3068\u30cb\u30fc\u30ba\u3092\u628a\u63e1\u3057\u3001<br>\u6700\u9069\u306a\u6559\u80b2\u306e\u65b9\u5411\u6027\u3092\u3054\u63d0\u6848\u3057\u307e\u3059\u3002',
  'survey.f1': '\u533f\u540d\u3067\u53c2\u52a0\u53ef\u80fd', 'survey.f2': '\u6240\u8981\u00b73\u5206', 'survey.f3': '\u7d50\u679c\u30b5\u30de\u30ea\u30fc\u30ec\u30dd\u30fc\u30c8\u63d0\u4f9b',
  'survey.btn': '\u30a2\u30f3\u30b1\u30fc\u30c8\u306b\u7b54\u3048\u308b &rarr;',
  'about.label': '\u7d39\u4ecb',
  'about.title': '\u3064\u304f\u3063\u305f\u4eba',
  'about.text': '<strong>\u5927\u578b\u7523\u696d\u30b7\u30b9\u30c6\u30e0</strong>\u3067\u30ad\u30e3\u30ea\u30a2\u3092\u59cb\u3081\u3001<strong>IoT\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0</strong>\u3068<strong>AI\u30d9\u30fc\u30b9\u306e\u30a8\u30c3\u30b8\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0</strong>\u3092\u7d4c\u3066\u3001<strong>\u30b0\u30ea\u30fc\u30f3\u30a8\u30cd\u30eb\u30ae\u30fc\u5236\u5fa1\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3</strong>\u307e\u3067\u20143\u3064\u306e\u7523\u696d\u3092\u8cab\u304d\u3001\u8a2d\u8a08\u30fb\u958b\u767a\u30fb\u91cf\u7523\u30fb\u8a66\u904b\u8ee2\u3092\u81ea\u3089\u624b\u304c\u3051\u3066\u304d\u305f<strong>\u30d5\u30eb\u30b9\u30bf\u30c3\u30af\u7523\u696d\u30a2\u30fc\u30ad\u30c6\u30af\u30c8</strong>\u3067\u3059\u3002<br><br><strong>\u6570\u5341\u540d\u898f\u6a21\u306e\u6280\u8853\u7d44\u7e54\u3092\u30bc\u30ed\u304b\u3089\u69cb\u7bc9</strong>\u3057\u3001\u4e8b\u696d\u3092<strong>3\u500d\u4ee5\u4e0a\u306b\u30b9\u30b1\u30fc\u30eb\u30a2\u30c3\u30d7</strong>\u3002\u8907\u6570\u306e<strong>\u56fd\u5bb6R&amp;D\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f01\u753b\u304b\u3089\u5b8c\u9042</strong>\u307e\u3067\u7d71\u62ec\u3057\u3001<strong>\u30b0\u30ed\u30fc\u30d0\u30eb\u6280\u8853\u8a8d\u8a3c</strong>\u3092\u53d6\u5f97\u3001<strong>\u7c73\u56fd\u3068\u306e\u56fd\u969b\u5171\u540c\u7814\u7a76</strong>\u3092\u7275\u5f15\u3057\u307e\u3057\u305f\u3002<br><br>\u6280\u8853\u3060\u3051\u306e\u30a8\u30f3\u30b8\u30cb\u30a2\u3067\u306f\u306a\u304f\u3001<strong>\u7d44\u7e54\u3092\u3064\u304f\u308a\u3001\u4e8b\u696d\u3092\u80b2\u3066\u3001\u4e16\u754c\u306e\u821e\u53f0\u3067\u5b9f\u8a3c\u3055\u308c\u305f</strong>\u7d4c\u9a13\u3092\u6301\u3064\u4eba\u7269\u3067\u3059\u3002<br><br>\u73fe\u5728\u306f\u305d\u306e15\u5e74\u306e\u73fe\u5834\u7d4c\u9a13\u306e\u4e0a\u306b<strong>AI\u5909\u9769\u30e1\u30bd\u30c3\u30c9\u3092\u81ea\u3089\u5b9f\u8a3c</strong>\u3057\u3066\u304a\u308a\u3001\u691c\u8a3c\u3055\u308c\u305f\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u6559\u80b2\u3068\u30b3\u30f3\u30b5\u30eb\u30c6\u30a3\u30f3\u30b0\u3078\u3068\u8ee2\u63db\u3057\u3066\u3044\u307e\u3059\u3002<br><br><strong style="font-size:1.05em;">\u300c\u7406\u8ad6\u3067\u306f\u306a\u304f\u7d4c\u9a13\u3092\u6559\u3048\u307e\u3059\u3002<br>\u3084\u3063\u305f\u4eba\u3060\u3051\u304c\u6559\u3048\u3089\u308c\u307e\u3059\u3002\u300d</strong>',
  'about.tl1y': '2024 \u2014 \u73fe\u5728',
  'about.tl1t': '\u30b0\u30ea\u30fc\u30f3\u30a8\u30cd\u30eb\u30ae\u30fc \u2014 \u30b7\u30b9\u30c6\u30e0\u30a2\u30fc\u30ad\u30c6\u30af\u30c8 &amp; AI\u5909\u9769\u5b9f\u8a3c',
  'about.tl1d': '\u5168\u5bb9\u91cf\u30a8\u30cd\u30eb\u30ae\u30fc\u5236\u5fa1\u30b7\u30b9\u30c6\u30e0\u8a2d\u8a08 + AI\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30b7\u30b9\u30c6\u30e0\u306e\u72ec\u81ea\u69cb\u7bc9 + \u7523\u696dAI\u5909\u9769\u30e1\u30bd\u30c3\u30c9\u306e\u5b9f\u8a3c',
  'about.tl2y': '2020 \u2014 2024',
  'about.tl2t': 'IoT &amp; AI \u2014 R&amp;D\u30bb\u30f3\u30bf\u30fc\u9577',
  'about.tl2d': '\u30a8\u30c3\u30b8AI\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u8a2d\u8a08\u3001\u8907\u6570\u306e\u56fd\u5bb6R&amp;D\u7d71\u62ec\u3001\u7c73\u56fd\u56fd\u969b\u5171\u540c\u7814\u7a76\u3001\u5b89\u5168\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u958b\u767a',
  'about.tl3y': '2016 \u2014 2020',
  'about.tl3t': '\u5927\u578b\u7523\u696d\u30b7\u30b9\u30c6\u30e0 \u2014 \u4e8b\u696d\u90e8\u7d71\u62ec',
  'about.tl3d': '\u6280\u8853\u7d44\u7e54\u3092\u30bc\u30ed\u304b\u3089\u69cb\u7bc9\u3001\u58f2\u4e0a3\u500d\u30b9\u30b1\u30fc\u30eb\u30a2\u30c3\u30d7\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u6280\u8853\u8a8d\u8a3c\u53d6\u5f97\u3001\u4f01\u696d\u4ed8\u8a2d\u7814\u7a76\u6240\u8a2d\u7acb',
  'about.tl4y': '2011 \u2014 2016',
  'about.tl4t': '\u7d44\u8fbc\u307f &amp; \u30b7\u30b9\u30c6\u30e0\u30a8\u30f3\u30b8\u30cb\u30a2',
  'about.tl4d': '\u533b\u5de5\u5b66 &rarr; \u30e2\u30d0\u30a4\u30eb &rarr; \u7523\u696d\u30b7\u30b9\u30c6\u30e0\u3002\u8907\u6570\u30c9\u30e1\u30a4\u30f3\u306e\u8ee2\u63db\u3092\u901a\u3058\u3066\u30d5\u30eb\u30b9\u30bf\u30c3\u30af\u529b\u3092\u78ba\u7acb',
  'contact.label': '\u304a\u554f\u3044\u5408\u308f\u305b',
  'contact.title': '\u4e00\u7dd2\u306b\u3064\u304f\u308a\u307e\u3057\u3087\u3046',
  'contact.desc': 'AI\u5909\u9769\u6559\u80b2\u3001\u4f01\u696d\u30b3\u30f3\u30b5\u30eb\u30c6\u30a3\u30f3\u30b0\u3001\u8b1b\u6f14\u306e\u3054\u4f9d\u983c\u3001<br>\u3042\u308b\u3044\u306f\u7523\u696dAI\u306b\u3064\u3044\u3066\u8a71\u3057\u305f\u3044\u3068\u304d\u306b\u3002',
  'contact.email': '\u30e1\u30fc\u30eb',
  'footer.slogan': '\u73fe\u5834\u306bAI\u3092\u751f\u307f\u51fa\u3059\u3002'
};

/* ===== Ti\u1ebfng Vi\u1ec7t ===== */
I18N.vi = {
  'meta.title': 'MakeField AI \u2014 T\u1ea1o d\u1ef1ng AI ngay t\u1ea1i hi\u1ec7n tr\u01b0\u1eddng',
  'meta.desc': '95% doanh nghi\u1ec7p th\u1ea5t b\u1ea1i khi tri\u1ec3n khai AI. MakeField AI thi\u1ebft k\u1ebf s\u1ef1 chuy\u1ec3n \u0111\u1ed5i, kh\u00f4ng ph\u1ea3i c\u00f4ng c\u1ee5.',
  'nav.why': 'T\u1ea1i sao', 'nav.solution': 'Gi\u1ea3i ph\u00e1p', 'nav.proof': 'Minh ch\u1ee9ng', 'nav.programs': 'Ch\u01b0\u01a1ng tr\u00ecnh', 'nav.survey': 'Kh\u1ea3o s\u00e1t', 'nav.about': 'Gi\u1edbi thi\u1ec7u', 'nav.contact': 'Li\u00ean h\u1ec7',
  'hero.badge': '95% doanh nghi\u1ec7p th\u1ea5t b\u1ea1i khi tri\u1ec3n khai AI',
  'hero.h1': 'Ch\u00fang t\u00f4i kh\u00f4ng d\u1ea1y c\u00f4ng c\u1ee5.<br><span class="gradient-text">Ch\u00fang t\u00f4i thi\u1ebft k\u1ebf s\u1ef1 chuy\u1ec3n \u0111\u1ed5i.</span>',
  'hero.sub': 'Th\u1eddi \u0111\u1ea1i d\u1ea1y c\u00e1ch d\u00f9ng ChatGPT \u0111\u00e3 qua.<br>B\u1eb1ng ph\u01b0\u01a1ng ph\u00e1p chuy\u1ec3n \u0111\u1ed5i AI \u0111\u01b0\u1ee3c ki\u1ec3m ch\u1ee9ng qua 15 n\u0103m kinh nghi\u1ec7m th\u1ef1c \u0111\u1ecba,<br>ch\u00fang t\u00f4i t\u1ea1o ra thay \u0111\u1ed5i th\u1ef1c ch\u1ea5t t\u1ea1i hi\u1ec7n tr\u01b0\u1eddng c\u00f4ng nghi\u1ec7p.',
  'hero.btn1': 'Xem ph\u01b0\u01a1ng ph\u00e1p', 'hero.btn2': 'Ch\u1ea9n \u0111o\u00e1n doanh nghi\u1ec7p &rarr;', 'hero.btn3': 'Li\u00ean h\u1ec7',
  'problem.label': 'V\u1ea5n \u0111\u1ec1',
  'problem.title': 'V\u00ec sao ph\u1ea7n l\u1edbn doanh nghi\u1ec7p<br>th\u1ea5t b\u1ea1i khi tri\u1ec3n khai AI',
  'problem.desc': 'H\u1ecd mua c\u00f4ng c\u1ee5 AI r\u1ed3i b\u1ea3o nh\u00e2n vi\u00ean \u201ct\u1ef1 xoay x\u1edf\u201d.<br>Ba th\u00e1ng sau, ph\u1ea7n l\u1edbn k\u1ebft lu\u1eadn \u201ckh\u00f4ng ph\u00f9 h\u1ee3p v\u1edbi c\u00f4ng vi\u1ec7c c\u1ee7a ch\u00fang ta\u201d.<br>V\u1ea5n \u0111\u1ec1 kh\u00f4ng n\u1eb1m \u1edf AI. <strong>C\u00e1ch ti\u1ebfp c\u1eadn</strong> m\u1edbi l\u00e0 sai.',
  'problem.c1h': 'Doanh nghi\u1ec7p \u0111\u00e3 t\u1eeb b\u1ecf d\u1ef1 \u00e1n AI',
  'problem.c1p': '\u0110\u00e3 tri\u1ec3n khai nh\u01b0ng d\u1eebng l\u1ea1i v\u00ec kh\u00f4ng \u0111\u1ea1t ROI. Nguy\u00ean nh\u00e2n l\u1edbn nh\u1ea5t: v\u1ea5n \u0111\u1ec1 ch\u1ea5t l\u01b0\u1ee3ng d\u1eef li\u1ec7u (43%).',
  'problem.c1s': 'Deloitte State of AI 2026',
  'problem.c2h': '\u201cCh\u1ec9 prompt th\u00f4i l\u00e0 ch\u01b0a \u0111\u1ee7\u201d',
  'problem.c2p': '82% l\u00e3nh \u0111\u1ea1o CNTT cho r\u1eb1ng ch\u1ec9 ri\u00eang prompt engineering kh\u00f4ng th\u1ec3 t\u1ea1o ra k\u1ebft qu\u1ea3 th\u1ef1c ch\u1ea5t. Hi\u1ec7u n\u0103ng AI do d\u1eef li\u1ec7u quy\u1ebft \u0111\u1ecbnh, kh\u00f4ng ph\u1ea3i c\u00f4ng c\u1ee5.',
  'problem.c2s': '2026 Context Management Report',
  'problem.c3h': 'T\u1ef7 l\u1ec7 \u1ee9ng d\u1ee5ng AI c\u1ee7a SME H\u00e0n Qu\u1ed1c',
  'problem.c3p': 'C\u1ef1c k\u1ef3 th\u1ea5p so v\u1edbi doanh nghi\u1ec7p l\u1edbn (49,2%). R\u00e0o c\u1ea3n l\u1edbn nh\u1ea5t: thi\u1ebfu c\u1ea3m nh\u1eadn r\u00f5 r\u00e0ng v\u1ec1 \u201cAI gi\u00fap \u00edch g\u00ec cho doanh nghi\u1ec7p c\u1ee7a ch\u00fang ta\u201d.',
  'problem.c3s': 'Ph\u00f2ng Th\u01b0\u01a1ng m\u1ea1i H\u00e0n Qu\u1ed1c 2025',
  'solution.label': 'Gi\u1ea3i ph\u00e1p',
  'solution.title': 'Chi\u1ebfn l\u01b0\u1ee3c khu\u1ebfch \u0111\u1ea1i AI<br><span class="gradient-text">4 Phase Framework</span>',
  'solution.desc': 'Thay v\u00ec d\u1ea1y c\u00e1ch d\u00f9ng c\u00f4ng c\u1ee5, ch\u00fang t\u00f4i <strong>chuy\u1ec3n tri th\u1ee9c nghi\u1ec7p v\u1ee5 th\u00e0nh d\u1ea1ng m\u00e0 AI c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng</strong>.<br>Kh\u00f4ng ph\u1ea3i AI thay th\u1ebf nh\u00e2n vi\u00ean, m\u00e0 AI <strong>khu\u1ebfch \u0111\u1ea1i h\u1ecd g\u1ea5p 10 l\u1ea7n</strong>.<br>M\u1ed9t ph\u01b0\u01a1ng ph\u00e1p h\u1ec7 th\u1ed1ng gi\u00fap 100 ng\u01b0\u1eddi v\u1ed1n l\u00e0m 10 vi\u1ec7c m\u1ed7i ng\u01b0\u1eddi nay l\u00e0m \u0111\u01b0\u1ee3c 100 vi\u1ec7c.',
  'solution.p1h': 'C\u1ea5u tr\u00fac h\u00f3a tri th\u1ee9c',
  'solution.p1p': 'Chuy\u1ec3n tri th\u1ee9c ng\u1ea7m c\u1ee7a nh\u00e2n vi\u00ean (kinh nghi\u1ec7m, b\u00ed quy\u1ebft, tr\u1ef1c gi\u00e1c) th\u00e0nh tri th\u1ee9c hi\u1ec7n (t\u00e0i li\u1ec7u, d\u1eef li\u1ec7u, quy t\u1eafc). Giai \u0111o\u1ea1n n\u00e0y kh\u00f4ng d\u1ea1y c\u00e1ch d\u00f9ng c\u00f4ng c\u1ee5 AI.',
  'solution.p2h': 'C\u01a1 s\u1edf tri th\u1ee9c trung t\u00e2m',
  'solution.p2p': 'T\u00edch h\u1ee3p tri th\u1ee9c \u0111\u00e3 c\u1ea5u tr\u00fac v\u00e0o m\u1ed9t h\u1ec7 th\u1ed1ng trung t\u00e2m. B\u1ea3n \u0111\u1ed3 quy tr\u00ecnh t\u1eebng ph\u00f2ng ban, quy t\u1eafc ra quy\u1ebft \u0111\u1ecbnh v\u00e0 CSDL x\u1eed l\u00fd s\u1ef1 c\u1ed1 \u0111\u01b0\u1ee3c k\u1ebft n\u1ed1i th\u00e0nh m\u1ed9t.',
  'solution.p3h': 'N\u1ed9i t\u1ea1i h\u00f3a h\u1ec7 th\u1ed1ng AI',
  'solution.p3p': 'X\u00e2y d\u1ef1ng quy tr\u00ecnh AI tr\u00ean n\u1ec1n tri th\u1ee9c \u0111\u00e3 t\u00edch l\u0169y. Nh\u00e2n vi\u00ean d\u00f9ng nh\u01b0 ERP m\u00e0 kh\u00f4ng c\u1ea7n hi\u1ec3u c\u00f4ng ngh\u1ec7.',
  'solution.p4h': 'Thu ho\u1ea1ch khu\u1ebfch \u0111\u1ea1i',
  'solution.p4p': 'N\u0103ng su\u1ea5t m\u1ed7i ng\u01b0\u1eddi t\u0103ng 3\u201310 l\u1ea7n. M\u1edf r\u1ed9ng kinh doanh m\u00e0 kh\u00f4ng c\u1ea7n tuy\u1ec3n m\u1edbi, v\u00e0 tri th\u1ee9c v\u1eabn \u0111\u01b0\u1ee3c gi\u1eef trong h\u1ec7 th\u1ed1ng ngay c\u1ea3 khi nh\u00e2n s\u1ef1 ch\u1ee7 ch\u1ed1t r\u1eddi \u0111i.',
  'solution.quote': '\u201cAI k\u00e9m th\u00f4ng minh h\u01a1n v\u1edbi d\u1eef li\u1ec7u t\u1ed1t<br>s\u1ebd th\u1eafng AI th\u00f4ng minh v\u1edbi d\u1eef li\u1ec7u k\u00e9m.<br>C\u1ea5u tr\u00fac h\u00f3a tri th\u1ee9c nh\u00e2n vi\u00ean l\u00e0 \u0111i\u1ec3m kh\u1edfi \u0111\u1ea7u c\u1ee7a m\u1ecdi chi\u1ebfn l\u01b0\u1ee3c AI.\u201d',
  'proof.label': 'Minh ch\u1ee9ng',
  'proof.title': 'Ch\u00fang t\u00f4i \u0111\u00e3 t\u1ef1 m\u00ecnh l\u00e0m.<br><span class="gradient-text">Ng\u00e0y th\u1ee9 <span id="days-count">0</span> v\u00e0 v\u1eabn ti\u1ebfp t\u1ee5c.</span>',
  'proof.desc': '\u0110\u00e2y kh\u00f4ng ph\u1ea3i l\u00fd thuy\u1ebft. \u0110\u00f3 l\u00e0 b\u1ea3n ghi \u0111ang di\u1ec5n ra c\u1ee7a m\u1ed9t k\u1ef9 s\u01b0 c\u00f4ng nghi\u1ec7p 15 n\u0103m kinh nghi\u1ec7m<br>tr\u1ef1c ti\u1ebfp \u00e1p d\u1ee5ng, \u0111o l\u01b0\u1eddng v\u00e0 ki\u1ec3m ch\u1ee9ng ph\u01b0\u01a1ng ph\u00e1p chuy\u1ec3n \u0111\u1ed5i AI trong c\u00f4ng vi\u1ec7c th\u1ef1c \u0111\u1ecba.',
  'proof.s1': 'T\u00e1c t\u1eed AI \u0111\u00e3 x\u00e2y d\u1ef1ng', 'proof.s2': 'T\u00e0i li\u1ec7u c\u01a1 s\u1edf tri th\u1ee9c', 'proof.s3': 'D\u00f2ng tri th\u1ee9c \u0111\u00e3 c\u1ea5u tr\u00fac', 'proof.s4': 'Token \u0111\u00e3 x\u1eed l\u00fd l\u0169y k\u1ebf', 'proof.s5': 'N\u0103m kinh nghi\u1ec7m th\u1ef1c \u0111\u1ecba', 'proof.s6': 'Ng\u00e0y th\u1ef1c ch\u1ee9ng',
  'proof.quote': '\u201c\u0110\u1ed1i chi\u1ebfu ki\u1ec3m ch\u1ee9ng h\u00e0ng tr\u0103m t\u1ec7p m\u00e3 ngu\u1ed3n c\u00f4ng nghi\u1ec7p c\u00f9ng AI,<br>t\u1ef1 \u0111\u1ed9ng tr\u00edch xu\u1ea5t d\u1eef li\u1ec7u t\u1eeb b\u1ea3n v\u1ebd c\u00f4ng nghi\u1ec7p,<br>v\u00e0 ph\u00e2n t\u00edch h\u00e0ng tri\u1ec7u d\u00f2ng d\u1eef li\u1ec7u v\u1eadn h\u00e0nh nh\u00e0 m\u00e1y quy m\u00f4 l\u1edbn.<br><br>Ch\u00fang t\u00f4i gi\u1ea3ng d\u1ea1y ph\u01b0\u01a1ng ph\u00e1p r\u00fat ra t\u1eeb qu\u00e1 tr\u00ecnh n\u00e0y.\u201d',
  'edu.label': 'Ch\u01b0\u01a1ng tr\u00ecnh',
  'edu.title': 'Ch\u01b0\u01a1ng tr\u00ecnh \u0111\u00e0o t\u1ea1o',
  'edu.desc': 'C\u1ea5u tr\u00fac ba t\u1ea7ng: kh\u00f4ng ph\u1ea3i ai c\u0169ng c\u1ea7n tr\u1edf th\u00e0nh chuy\u00ean gia AI.<br>90% t\u1ea1o d\u1eef li\u1ec7u, 8% x\u00e2y h\u1ec7 th\u1ed1ng, 2% thi\u1ebft k\u1ebf chi\u1ebfn l\u01b0\u1ee3c.',
  'edu.trackA': 'Track A \u2014 Ph\u01b0\u01a1ng ph\u00e1p chuy\u1ec3n \u0111\u1ed5i AI (C\u1ed1t l\u00f5i)',
  'edu.a1h': 'C\u1ea5u tr\u00fac h\u00f3a c\u00f4ng vi\u1ec7c cho AI',
  'edu.a1p': 'C\u00e1ch ph\u00e2n t\u00edch c\u00f4ng vi\u1ec7c c\u1ee7a b\u1ea1n v\u00e0 s\u1eafp x\u1ebfp th\u00e0nh d\u1ea1ng AI c\u00f3 th\u1ec3 d\u00f9ng. Ch\u00fang t\u00f4i kh\u00f4ng d\u1ea1y c\u00e1ch d\u00f9ng c\u00f4ng c\u1ee5 \u2014 \u0111\u00e2y m\u1edbi l\u00e0 b\u01b0\u1edbc \u0111\u1ea7u.',
  'edu.a1m': 'To\u00e0n th\u1ec3 nh\u00e2n vi\u00ean (g\u1ed3m c\u1ea3 kh\u00f4ng l\u1eadp tr\u00ecnh) &bull; 4\u20138 gi\u1edd &bull; Th\u1ef1c h\u00e0nh',
  'edu.a2h': 'T\u00e1i thi\u1ebft k\u1ebf quy tr\u00ecnh AI',
  'edu.a2p': 'Chia c\u00f4ng vi\u1ec7c th\u00e0nh c\u00e1c vi-t\u00e1c v\u1ee5, ph\u00e2n lo\u1ea1i vi\u1ec7c AI l\u00e0m / vi\u1ec7c ng\u01b0\u1eddi l\u00e0m, v\u00e0 thi\u1ebft k\u1ebf quy tr\u00ecnh m\u1edbi.',
  'edu.a2m': '\u1ee8ng vi\u00ean builder ph\u00f2ng ban &bull; 8\u201316 gi\u1edd &bull; Theo d\u1ef1 \u00e1n',
  'edu.a3h': 'T\u01b0 v\u1ea5n chuy\u1ec3n \u0111\u1ed5i AI doanh nghi\u1ec7p',
  'edu.a3p': '\u00c1p d\u1ee5ng tr\u1ecdn b\u1ed9 4-Phase Framework \u0111\u1ec3 x\u00e2y l\u1ed9 tr\u00ecnh chuy\u1ec3n \u0111\u1ed5i AI ri\u00eang cho doanh nghi\u1ec7p. Bao g\u1ed3m m\u00f4 h\u00ecnh t\u1ed5 ch\u1ee9c ba t\u1ea7ng + ph\u00e2n t\u00edch ROI.',
  'edu.a3m': 'L\u00e3nh \u0111\u1ea1o / CTO &bull; 2\u20133 ng\u00e0y &bull; Workshop chi\u1ebfn l\u01b0\u1ee3c',
  'edu.trackB': 'Track B \u2014 AI l\u0129nh v\u1ef1c th\u1ef1c chi\u1ebfn',
  'edu.trackBnote': 'T\u00f9y ch\u1ec9nh theo ng\u00e0nh v\u00e0 l\u0129nh v\u1ef1c c\u1ee7a doanh nghi\u1ec7p b\u1ea1n. D\u01b0\u1edbi \u0111\u00e2y l\u00e0 c\u00e1c v\u00ed d\u1ee5 \u00e1p d\u1ee5ng.',
  'edu.b1h': 'Ph\u00e1t tri\u1ec3n logic \u0111i\u1ec1u khi\u1ec3n c\u00f4ng nghi\u1ec7p b\u1eb1ng AI',
  'edu.b1p': 'Th\u1ef1c h\u00e0nh tr\u1ecdn pipeline: ph\u00e2n t\u00edch, ki\u1ec3m ch\u1ee9ng v\u00e0 t\u1ef1 sinh m\u00e3 ngu\u1ed3n h\u1ec7 th\u1ed1ng \u0111i\u1ec1u khi\u1ec3n b\u1eb1ng AI.',
  'edu.b1m': 'K\u1ef9 s\u01b0 \u0111i\u1ec1u khi\u1ec3n/t\u1ef1 \u0111\u1ed9ng h\u00f3a &bull; 4\u20138 gi\u1edd &bull; Th\u1ef1c h\u00e0nh',
  'edu.b2h': '\u0110\u1ecdc &amp; ki\u1ec3m ch\u1ee9ng b\u1ea3n v\u1ebd c\u00f4ng nghi\u1ec7p b\u1eb1ng AI',
  'edu.b2p': 'Ph\u00e2n t\u00edch b\u1ea3n v\u1ebd, nh\u1eadn di\u1ec7n k\u00fd hi\u1ec7u, t\u1ef1 \u0111\u1ed9ng tr\u00edch xu\u1ea5t d\u1eef li\u1ec7u. Th\u1ef1c h\u00e0nh \u0111\u1ed1i chi\u1ebfu ba chi\u1ec1u: m\u00e3 &harr; t\u00e0i li\u1ec7u &harr; b\u1ea3n v\u1ebd.',
  'edu.b2m': 'Thi\u1ebft k\u1ebf / thi c\u00f4ng / gi\u00e1m s\u00e1t &bull; 4\u20138 gi\u1edd &bull; Th\u1ef1c h\u00e0nh',
  'edu.b3h': 'Chi\u1ebfn l\u01b0\u1ee3c sinh t\u1ed3n AI c\u1ee7a k\u1ef9 s\u01b0 c\u00f4ng nghi\u1ec7p',
  'edu.b3p': '2023 prompt &rarr; 2024 c\u00f4ng c\u1ee5 AI &rarr; 2025 vibe coding &rarr; 2026 t\u00e1c t\u1eed. D\u00f2ng ch\u1ea3y \u0111\u1ed5i thay ch\u00f3ng m\u1eb7t c\u1ee7a k\u1ef7 nguy\u00ean AI, v\u00e0 chi\u1ebfn l\u01b0\u1ee3c sinh t\u1ed3n c\u1ee7a b\u1ea1n.',
  'edu.b3m': 'M\u1ecdi \u0111\u1ed1i t\u01b0\u1ee3ng &bull; 1\u20132 gi\u1edd &bull; Di\u1ec5n thuy\u1ebft',
  'survey.label': 'Kh\u1ea3o s\u00e1t 3 ph\u00fat',
  'survey.title': 'Kh\u00f3a \u0111\u00e0o t\u1ea1o AI n\u00e0o<br>ph\u00f9 h\u1ee3p v\u1edbi doanh nghi\u1ec7p b\u1ea1n?',
  'survey.desc': 'Ch\u1ec9 c\u1ea7n ba ph\u00fat. Ch\u00fang t\u00f4i \u0111\u00e1nh gi\u00e1 m\u1ee9c \u0111\u1ed9 \u1ee9ng d\u1ee5ng AI hi\u1ec7n t\u1ea1i v\u00e0 nhu c\u1ea7u c\u1ee7a b\u1ea1n,<br>r\u1ed3i \u0111\u1ec1 xu\u1ea5t h\u01b0\u1edbng \u0111\u00e0o t\u1ea1o ph\u00f9 h\u1ee3p.',
  'survey.f1': 'Tham gia \u1ea9n danh', 'survey.f2': 'M\u1ea5t 3 ph\u00fat', 'survey.f3': 'Cung c\u1ea5p b\u00e1o c\u00e1o t\u00f3m t\u1eaft',
  'survey.btn': 'L\u00e0m kh\u1ea3o s\u00e1t &rarr;',
  'about.label': 'Gi\u1edbi thi\u1ec7u',
  'about.title': 'Ng\u01b0\u1eddi s\u00e1ng l\u1eadp',
  'about.text': 'S\u1ef1 nghi\u1ec7p kh\u1edfi \u0111\u1ea7u t\u1eeb <strong>h\u1ec7 th\u1ed1ng c\u00f4ng nghi\u1ec7p quy m\u00f4 l\u1edbn</strong>, qua <strong>n\u1ec1n t\u1ea3ng IoT</strong> v\u00e0 <strong>\u0111i\u1ec7n to\u00e1n bi\u00ean d\u1ef1a tr\u00ean AI</strong>, \u0111\u1ebfn <strong>gi\u1ea3i ph\u00e1p \u0111i\u1ec1u khi\u1ec3n n\u0103ng l\u01b0\u1ee3ng xanh</strong> \u2014 m\u1ed9t <strong>ki\u1ebfn tr\u00fac s\u01b0 c\u00f4ng nghi\u1ec7p full-stack</strong> \u0111\u00e3 tr\u1ef1c ti\u1ebfp th\u1ef1c hi\u1ec7n thi\u1ebft k\u1ebf, ph\u00e1t tri\u1ec3n, s\u1ea3n xu\u1ea5t h\u00e0ng lo\u1ea1t v\u00e0 ch\u1ea1y th\u1eed xuy\u00ean su\u1ed1t ba ng\u00e0nh.<br><br>\u0110\u00e3 <strong>x\u00e2y d\u1ef1ng t\u1ed5 ch\u1ee9c k\u1ef9 thu\u1eadt h\u00e0ng ch\u1ee5c ng\u01b0\u1eddi t\u1eeb con s\u1ed1 kh\u00f4ng</strong> v\u00e0 <strong>m\u1edf r\u1ed9ng doanh nghi\u1ec7p h\u01a1n ba l\u1ea7n</strong>. D\u1eabn d\u1eaft nhi\u1ec1u <strong>d\u1ef1 \u00e1n R&amp;D qu\u1ed1c gia t\u1eeb l\u1eadp k\u1ebf ho\u1ea1ch \u0111\u1ebfn ho\u00e0n th\u00e0nh</strong>, \u0111\u1ea1t <strong>ch\u1ee9ng nh\u1eadn k\u1ef9 thu\u1eadt to\u00e0n c\u1ea7u</strong> v\u00e0 ch\u1ee7 tr\u00ec <strong>nghi\u00ean c\u1ee9u chung qu\u1ed1c t\u1ebf v\u1edbi Hoa K\u1ef3</strong>.<br><br>Kh\u00f4ng ph\u1ea3i k\u1ef9 s\u01b0 ch\u1ec9 bi\u1ebft c\u00f4ng ngh\u1ec7, m\u00e0 l\u00e0 ng\u01b0\u1eddi \u0111\u00e3 <strong>x\u00e2y t\u1ed5 ch\u1ee9c, ph\u00e1t tri\u1ec3n doanh nghi\u1ec7p v\u00e0 \u0111\u01b0\u1ee3c ki\u1ec3m ch\u1ee9ng tr\u00ean s\u00e2n kh\u1ea5u to\u00e0n c\u1ea7u</strong>.<br><br>Hi\u1ec7n nay, tr\u00ean n\u1ec1n 15 n\u0103m kinh nghi\u1ec7m th\u1ef1c \u0111\u1ecba \u0111\u00f3, \u00f4ng \u0111ang <strong>tr\u1ef1c ti\u1ebfp th\u1ef1c ch\u1ee9ng m\u1ed9t ph\u01b0\u01a1ng ph\u00e1p chuy\u1ec3n \u0111\u1ed5i AI</strong>, bi\u1ebfn khung ph\u01b0\u01a1ng ph\u00e1p \u0111\u00e3 ki\u1ec3m ch\u1ee9ng th\u00e0nh \u0111\u00e0o t\u1ea1o v\u00e0 t\u01b0 v\u1ea5n.<br><br><strong style="font-size:1.05em;">\u201cCh\u00fang t\u00f4i d\u1ea1y kinh nghi\u1ec7m, kh\u00f4ng ph\u1ea3i l\u00fd thuy\u1ebft.<br>Ch\u1ec9 ng\u01b0\u1eddi \u0111\u00e3 th\u1ef1c s\u1ef1 l\u00e0m m\u1edbi c\u00f3 th\u1ec3 d\u1ea1y.\u201d</strong>',
  'about.tl1y': '2024 \u2014 HI\u1ec6N T\u1ea0I',
  'about.tl1t': 'N\u0103ng l\u01b0\u1ee3ng xanh \u2014 Ki\u1ebfn tr\u00fac s\u01b0 h\u1ec7 th\u1ed1ng &amp; Th\u1ef1c ch\u1ee9ng chuy\u1ec3n \u0111\u1ed5i AI',
  'about.tl1d': 'Thi\u1ebft k\u1ebf h\u1ec7 th\u1ed1ng \u0111i\u1ec1u khi\u1ec3n n\u0103ng l\u01b0\u1ee3ng to\u00e0n d\u1ea3i c\u00f4ng su\u1ea5t + t\u1ef1 x\u00e2y h\u1ec7 th\u1ed1ng t\u00e1c t\u1eed AI + th\u1ef1c ch\u1ee9ng ph\u01b0\u01a1ng ph\u00e1p chuy\u1ec3n \u0111\u1ed5i AI c\u00f4ng nghi\u1ec7p',
  'about.tl2y': '2020 \u2014 2024',
  'about.tl2t': 'IoT &amp; AI \u2014 Gi\u00e1m \u0111\u1ed1c Trung t\u00e2m R&amp;D',
  'about.tl2d': 'Thi\u1ebft k\u1ebf n\u1ec1n t\u1ea3ng edge-AI, d\u1eabn d\u1eaft nhi\u1ec1u ch\u01b0\u01a1ng tr\u00ecnh R&amp;D qu\u1ed1c gia, nghi\u00ean c\u1ee9u chung qu\u1ed1c t\u1ebf v\u1edbi Hoa K\u1ef3, ph\u00e1t tri\u1ec3n h\u1ec7 th\u1ed1ng gi\u00e1m s\u00e1t an to\u00e0n',
  'about.tl3y': '2016 \u2014 2020',
  'about.tl3t': 'H\u1ec7 th\u1ed1ng c\u00f4ng nghi\u1ec7p l\u1edbn \u2014 Tr\u01b0\u1edfng b\u1ed9 ph\u1eadn kinh doanh',
  'about.tl3d': 'X\u00e2y t\u1ed5 ch\u1ee9c k\u1ef9 thu\u1eadt t\u1eeb con s\u1ed1 kh\u00f4ng, t\u0103ng doanh thu g\u1ea5p ba, \u0111\u1ea1t ch\u1ee9ng nh\u1eadn k\u1ef9 thu\u1eadt to\u00e0n c\u1ea7u, th\u00e0nh l\u1eadp vi\u1ec7n R&amp;D doanh nghi\u1ec7p',
  'about.tl4y': '2011 \u2014 2016',
  'about.tl4t': 'K\u1ef9 s\u01b0 nh\u00fang &amp; h\u1ec7 th\u1ed1ng',
  'about.tl4d': 'Y sinh &rarr; di \u0111\u1ed9ng &rarr; h\u1ec7 th\u1ed1ng c\u00f4ng nghi\u1ec7p. Thi\u1ebft l\u1eadp n\u0103ng l\u1ef1c full-stack qua chuy\u1ec3n \u0111\u1ed5i \u0111a l\u0129nh v\u1ef1c',
  'contact.label': 'Li\u00ean h\u1ec7',
  'contact.title': 'C\u00f9ng nhau x\u00e2y d\u1ef1ng',
  'contact.desc': 'V\u1ec1 \u0111\u00e0o t\u1ea1o chuy\u1ec3n \u0111\u1ed5i AI, t\u01b0 v\u1ea5n doanh nghi\u1ec7p, m\u1eddi di\u1ec5n thuy\u1ebft,<br>hay \u0111\u01a1n gi\u1ea3n l\u00e0 mu\u1ed1n tr\u00f2 chuy\u1ec7n v\u1ec1 AI c\u00f4ng nghi\u1ec7p.',
  'contact.email': 'Email',
  'footer.slogan': 'T\u1ea1o d\u1ef1ng AI ngay t\u1ea1i hi\u1ec7n tr\u01b0\u1eddng.'
};

/* ===== ไทย (Thai) ===== */
I18N.th = {
  'meta.title': 'MakeField AI — เราสร้าง AI ที่หน้างานจริง',
  'meta.desc': '95% ขององค์กรล้มเหลวในการนำ AI มาใช้ MakeField AI ออกแบบการเปลี่ยนแปลง ไม่ใช่แค่เครื่องมือ',
  'nav.why': 'ทำไม', 'nav.solution': 'โซลูชัน', 'nav.proof': 'หลักฐาน', 'nav.programs': 'หลักสูตร', 'nav.survey': 'แบบสำรวจ', 'nav.about': 'เกี่ยวกับเรา', 'nav.contact': 'ติดต่อ',
  'hero.badge': '95% ขององค์กรล้มเหลวในการนำ AI มาใช้',
  'hero.h1': 'เราไม่ได้สอนใช้เครื่องมือ<br><span class="gradient-text">เราออกแบบการเปลี่ยนแปลง</span>',
  'hero.sub': 'ยุคของการสอนใช้ ChatGPT จบลงแล้ว<br>ด้วยระเบียบวิธีการเปลี่ยนผ่านสู่ AI ที่พิสูจน์แล้วจากประสบการณ์หน้างาน 15 ปี<br>เราสร้างการเปลี่ยนแปลงที่แท้จริงในแนวหน้าของอุตสาหกรรม',
  'hero.btn1': 'ดูระเบียบวิธี', 'hero.btn2': 'วินิจฉัยองค์กรของคุณ &rarr;', 'hero.btn3': 'ติดต่อ',
  'problem.label': 'ปัญหา',
  'problem.title': 'ทำไมองค์กรส่วนใหญ่<br>จึงล้มเหลวในการนำ AI มาใช้',
  'problem.desc': 'พวกเขาซื้อเครื่องมือ AI แล้วบอกพนักงานให้ \u201cไปลองคิดเอาเอง\u201d<br>สามเดือนต่อมา ส่วนใหญ่สรุปว่า \u201cมันไม่เข้ากับงานของเรา\u201d<br>ปัญหาไม่ได้อยู่ที่ AI แต่อยู่ที่<strong>วิธีการ</strong>ที่ผิด',
  'problem.c1h': 'องค์กรที่ล้มเลิกโครงการ AI',
  'problem.c1p': 'นำมาใช้แต่หยุดกลางคันเพราะไม่บรรลุ ROI สาเหตุหลัก: ปัญหาคุณภาพข้อมูล (43%)',
  'problem.c1s': 'Deloitte State of AI 2026',
  'problem.c2h': '\u201cแค่ทำ prompt ไม่เพียงพอ\u201d',
  'problem.c2p': '82% ของผู้นำด้าน IT กล่าวว่า prompt engineering เพียงอย่างเดียวไม่อาจให้ผลลัพธ์ที่แท้จริง ประสิทธิภาพ AI ถูกกำหนดด้วยข้อมูล ไม่ใช่เครื่องมือ',
  'problem.c2s': '2026 Context Management Report',
  'problem.c3h': 'อัตราการนำ AI มาใช้ของ SME เกาหลี',
  'problem.c3p': 'ต่ำมากเมื่อเทียบกับองค์กรขนาดใหญ่ (49.2%) อุปสรรคใหญ่ที่สุด: การขาดความรู้สึกที่จับต้องได้ว่า \u201cAI ช่วยธุรกิจของเราอย่างไร\u201d',
  'problem.c3s': 'Korea Chamber of Commerce 2025',
  'solution.label': 'โซลูชัน',
  'solution.title': 'กลยุทธ์ขยายพลัง AI<br><span class="gradient-text">4 Phase Framework</span>',
  'solution.desc': 'แทนที่จะสอนวิธีใช้เครื่องมือ เรา<strong>แปลงความรู้ทางธุรกิจของคุณให้อยู่ในรูปแบบที่ AI ใช้งานได้</strong><br>ไม่ใช่ AI ที่มาแทนพนักงาน แต่เป็น AI ที่<strong>ขยายพลังพวกเขาเป็นสิบเท่า</strong><br>ระเบียบวิธีที่เป็นระบบ ที่ทำให้คน 100 คนซึ่งเคยทำงานคนละ 10 งาน บัดนี้ทำได้คนละ 100 งาน',
  'solution.p1h': 'การจัดโครงสร้างความรู้',
  'solution.p1p': 'แปลงความรู้โดยนัยของพนักงาน (ประสบการณ์ ความเชี่ยวชาญ สัญชาตญาณ) ให้เป็นความรู้ชัดแจ้ง (เอกสาร ข้อมูล กฎเกณฑ์) ขั้นตอนนี้ไม่มีการสอนใช้เครื่องมือ',
  'solution.p2h': 'ฐานข้อมูลความรู้ส่วนกลาง',
  'solution.p2p': 'รวมความรู้ที่จัดโครงสร้างแล้วเข้าสู่ระบบส่วนกลาง แผนผังกระบวนการของแต่ละแผนก กฎการตัดสินใจ และฐานข้อมูลแก้ปัญหา เชื่อมโยงกันเป็นหนึ่งเดียว',
  'solution.p3h': 'การฝัง AI เข้าสู่ระบบ',
  'solution.p3p': 'สร้างเวิร์กโฟลว์ AI บนความรู้ที่สั่งสมไว้ พนักงานใช้งานได้เหมือน ERP โดยไม่ต้องเข้าใจเทคโนโลยี',
  'solution.p4h': 'การเก็บเกี่ยวที่ขยายพลัง',
  'solution.p4p': 'ผลิตภาพต่อคนเพิ่ม 3\u201310 เท่า ขยายธุรกิจได้โดยไม่ต้องจ้างเพิ่ม และเก็บรักษาความรู้ไว้ในระบบแม้คนสำคัญจะลาออก',
  'solution.quote': '\u201cAI ที่ฉลาดน้อยกว่าแต่มีข้อมูลดี ชนะ<br>AI ที่ฉลาดกว่าแต่มีข้อมูลแย่<br>การจัดโครงสร้างความรู้ของพนักงาน คือจุดเริ่มต้นของทุกกลยุทธ์ AI\u201d',
  'proof.label': 'หลักฐาน',
  'proof.title': 'เราทำมันด้วยตัวเอง<br><span class="gradient-text">วันที่ <span id="days-count">0</span> และยังนับต่อไป</span>',
  'proof.desc': 'นี่ไม่ใช่ทฤษฎี แต่เป็นบันทึกที่กำลังดำเนินอยู่ของวิศวกรอุตสาหกรรม 15 ปี<br>ที่นำระเบียบวิธีการเปลี่ยนผ่านสู่ AI ไปใช้ วัดผล และตรวจสอบในงานหน้างานจริง',
  'proof.s1': 'AI agent ที่สร้างขึ้น', 'proof.s2': 'เอกสารฐานความรู้', 'proof.s3': 'บรรทัดความรู้ที่จัดโครงสร้าง', 'proof.s4': 'โทเค็นสะสมที่ประมวลผล', 'proof.s5': 'ปีในสนามจริง', 'proof.s6': 'วันแห่งการพิสูจน์สด',
  'proof.quote': '\u201cตรวจสอบข้ามไฟล์ซอร์สโค้ดอุตสาหกรรมหลายร้อยไฟล์ด้วย AI<br>สกัดข้อมูลจากแบบแปลนอุตสาหกรรมโดยอัตโนมัติ<br>และวิเคราะห์ข้อมูลการเดินเครื่องโรงงานขนาดใหญ่นับล้านแถว<br><br>เราสอนระเบียบวิธีที่ได้จากกระบวนการนี้\u201d',
  'edu.label': 'หลักสูตร',
  'edu.title': 'หลักสูตรการอบรม',
  'edu.desc': 'โครงสร้างสามชั้น: ไม่ใช่ทุกคนต้องเป็นผู้เชี่ยวชาญ AI<br>90% สร้างข้อมูล, 8% สร้างระบบ และ 2% ออกแบบกลยุทธ์',
  'edu.trackA': 'Track A \u2014 ระเบียบวิธีการเปลี่ยนผ่านสู่ AI (หลัก)',
  'edu.a1h': 'การจัดโครงสร้างงานเพื่อ AI',
  'edu.a1p': 'วิธีวิเคราะห์งานของตนเองและจัดให้อยู่ในรูปแบบที่ AI ใช้งานได้ เราไม่สอนวิธีใช้เครื่องมือ \u2014 สิ่งนี้มาก่อน',
  'edu.a1m': 'พนักงานทุกคน (รวมผู้ที่ไม่ใช่นักพัฒนา) &bull; 4\u20138 ชม. &bull; ลงมือปฏิบัติ',
  'edu.a2h': 'การออกแบบเวิร์กโฟลว์ AI ใหม่',
  'edu.a2p': 'แบ่งงานเป็นงานย่อย จำแนกว่าอะไรให้ AI ทำ อะไรให้คนทำ และออกแบบเวิร์กโฟลว์ใหม่',
  'edu.a2m': 'ผู้สมัครสร้างระบบของแผนก &bull; 8\u201316 ชม. &bull; อิงโครงการ',
  'edu.a3h': 'ที่ปรึกษาการเปลี่ยนผ่านสู่ AI ระดับองค์กร',
  'edu.a3p': 'ประยุกต์ใช้ 4-Phase Framework เต็มรูปแบบเพื่อสร้างโรดแมปการเปลี่ยนผ่านสู่ AI เฉพาะองค์กร รวมโมเดลองค์กรสามชั้น + การวิเคราะห์ ROI',
  'edu.a3m': 'ผู้บริหาร / CTO &bull; 2\u20133 วัน &bull; เวิร์กชอปกลยุทธ์',
  'edu.trackB': 'Track B \u2014 AI เฉพาะโดเมนในทางปฏิบัติ',
  'edu.trackBnote': 'ปรับให้เข้ากับอุตสาหกรรมและโดเมนของคุณ ด้านล่างคือตัวอย่างการประยุกต์',
  'edu.b1h': 'การพัฒนาลอจิกควบคุมอุตสาหกรรมด้วย AI',
  'edu.b1p': 'เซสชันลงมือปฏิบัติเต็มไปป์ไลน์: วิเคราะห์ ตรวจสอบ และสร้างซอร์สโค้ดระบบควบคุมอัตโนมัติด้วย AI',
  'edu.b1m': 'วิศวกรควบคุม/ระบบอัตโนมัติ &bull; 4\u20138 ชม. &bull; ลงมือปฏิบัติ',
  'edu.b2h': 'การอ่าน &amp; ตรวจสอบแบบแปลนอุตสาหกรรมด้วย AI',
  'edu.b2p': 'การแยกวิเคราะห์แบบแปลน การรู้จำสัญลักษณ์ การสกัดข้อมูลอัตโนมัติ ลงมือตรวจสอบข้ามสามทาง: โค้ด &harr; เอกสาร &harr; แบบแปลน',
  'edu.b2m': 'ออกแบบ / ก่อสร้าง / ควบคุมงาน &bull; 4\u20138 ชม. &bull; ลงมือปฏิบัติ',
  'edu.b3h': 'กลยุทธ์เอาตัวรอดยุค AI ของวิศวกรอุตสาหกรรม',
  'edu.b3p': '2023 prompt &rarr; 2024 เครื่องมือ AI &rarr; 2025 vibe coding &rarr; 2026 agent กระแสที่เปลี่ยนเร็วของยุค AI และกลยุทธ์เอาตัวรอดของคุณ',
  'edu.b3m': 'เปิดสำหรับทุกคน &bull; 1\u20132 ชม. &bull; ปาฐกถา',
  'survey.label': 'แบบสำรวจ 3 นาที',
  'survey.title': 'การอบรม AI แบบใด<br>เหมาะกับองค์กรของคุณ?',
  'survey.desc': 'ใช้เวลาเพียงสามนาที เราจะประเมินระดับความพร้อมด้าน AI และความต้องการปัจจุบันของคุณ<br>แล้วเสนอแนวทางการอบรมที่เหมาะสม',
  'survey.f1': 'เข้าร่วมแบบไม่ระบุตัวตน', 'survey.f2': 'ใช้เวลา 3 นาที', 'survey.f3': 'มีรายงานสรุปให้',
  'survey.btn': 'ทำแบบสำรวจ &rarr;',
  'about.label': 'เกี่ยวกับเรา',
  'about.title': 'ผู้ก่อตั้ง',
  'about.text': 'เส้นทางอาชีพที่เริ่มต้นจาก<strong>ระบบอุตสาหกรรมขนาดใหญ่</strong> ผ่าน<strong>แพลตฟอร์ม IoT</strong> และ<strong>เอดจ์คอมพิวติงบนพื้นฐาน AI</strong> สู่<strong>โซลูชันควบคุมพลังงานสีเขียว</strong> \u2014 <strong>สถาปนิกอุตสาหกรรมแบบ full-stack</strong> ที่ลงมือดูแลทั้งการออกแบบ พัฒนา ผลิตจำนวนมาก และการทดสอบเดินเครื่องด้วยตนเอง ครอบคลุมสามอุตสาหกรรม<br><br><strong>สร้างองค์กรเทคโนโลยีหลายสิบคนจากศูนย์</strong> และ<strong>ขยายธุรกิจมากกว่าสามเท่า</strong> นำ<strong>โครงการวิจัยและพัฒนาระดับชาติหลายโครงการตั้งแต่วางแผนจนเสร็จสมบูรณ์</strong> ได้รับ<strong>การรับรองทางเทคนิคระดับโลก</strong> และผลักดัน<strong>การวิจัยร่วมระหว่างประเทศกับสหรัฐอเมริกา</strong><br><br>ไม่ใช่วิศวกรที่รู้แค่เทคโนโลยี แต่เป็นผู้ที่<strong>สร้างองค์กร เติบโตธุรกิจ และได้รับการยอมรับบนเวทีระดับโลก</strong><br><br>บัดนี้ บนพื้นฐานประสบการณ์หน้างาน 15 ปีนั้น กำลัง<strong>พิสูจน์ระเบียบวิธีการเปลี่ยนผ่านสู่ AI ด้วยตนเอง</strong> \u2014 และแปรกรอบที่ผ่านการตรวจสอบแล้วนั้นเป็นการอบรมและการให้คำปรึกษา<br><br><strong style="font-size:1.05em;">\u201cเราสอนประสบการณ์ ไม่ใช่ทฤษฎี<br>มีเพียงผู้ที่ลงมือทำแล้วเท่านั้นที่สอนได้\u201d</strong>',
  'about.tl1y': '2024 \u2014 ปัจจุบัน',
  'about.tl1t': 'พลังงานสีเขียว \u2014 สถาปนิกระบบ &amp; การพิสูจน์การเปลี่ยนผ่าน AI',
  'about.tl1d': 'ออกแบบระบบควบคุมพลังงานเต็มกำลัง + สร้างระบบ AI agent ด้วยตนเอง + พิสูจน์ระเบียบวิธีการเปลี่ยนผ่านสู่ AI ในอุตสาหกรรม',
  'about.tl2y': '2020 \u2014 2024',
  'about.tl2t': 'IoT &amp; AI \u2014 หัวหน้าศูนย์วิจัยและพัฒนา',
  'about.tl2d': 'ออกแบบแพลตฟอร์ม edge-AI นำโครงการ R&amp;D ระดับชาติหลายโครงการ ทำวิจัยร่วมระหว่างประเทศกับสหรัฐฯ พัฒนาระบบเฝ้าระวังความปลอดภัย',
  'about.tl3y': '2016 \u2014 2020',
  'about.tl3t': 'ระบบอุตสาหกรรมขนาดใหญ่ \u2014 หัวหน้าฝ่าย',
  'about.tl3d': 'สร้างองค์กรเทคโนโลยีจากศูนย์ ขยายรายได้สามเท่า ได้รับการรับรองทางเทคนิคระดับโลก ก่อตั้งสถาบันวิจัยและพัฒนาขององค์กร',
  'about.tl4y': '2011 \u2014 2016',
  'about.tl4t': 'วิศวกรระบบฝังตัว &amp; ระบบ',
  'about.tl4d': 'ชีวการแพทย์ &rarr; มือถือ &rarr; ระบบอุตสาหกรรม สร้างความสามารถ full-stack ผ่านการเปลี่ยนผ่านหลายโดเมน',
  'contact.label': 'ติดต่อ',
  'contact.title': 'มาสร้างไปด้วยกัน',
  'contact.desc': 'สำหรับการอบรมการเปลี่ยนผ่านสู่ AI การให้คำปรึกษาองค์กร การเชิญบรรยาย<br>หรือเพียงต้องการพูดคุยเกี่ยวกับ AI ในอุตสาหกรรม',
  'contact.email': 'อีเมล',
  'footer.slogan': 'เราสร้าง AI ที่หน้างานจริง'
};

/* ===== 적용 로직 ===== */
const KO_CACHE = {};

function cacheKorean() {
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    KO_CACHE[el.getAttribute('data-i18n')] = el.innerHTML;
  });
  KO_CACHE['meta.title'] = document.title;
  var md = document.querySelector('meta[name="description"]');
  KO_CACHE['meta.desc'] = md ? md.getAttribute('content') : '';
}

function applyLang(lang) {
  if (!LANGS.some(function (l) { return l[0] === lang; })) lang = 'ko';
  var src = lang === 'ko' ? KO_CACHE : I18N[lang];
  if (!src) { lang = 'ko'; src = KO_CACHE; }

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (src[key] != null) el.innerHTML = src[key];
  });

  if (src['meta.title'] != null) document.title = src['meta.title'];
  var md = document.querySelector('meta[name="description"]');
  if (md && src['meta.desc'] != null) md.setAttribute('content', src['meta.desc']);

  document.documentElement.setAttribute('lang', lang);
  try { localStorage.setItem('mfai_lang', lang); } catch (e) {}

  var cur = LANGS.find(function (l) { return l[0] === lang; });
  var label = document.getElementById('lang-current');
  if (label && cur) label.textContent = cur[1];
  document.querySelectorAll('[data-lang-opt]').forEach(function (opt) {
    opt.classList.toggle('active', opt.getAttribute('data-lang-opt') === lang);
  });

  // innerHTML 교체로 재생성된 동적 통계(days-count 등) 다시 채움
  if (typeof window.refreshDynamicStats === 'function') window.refreshDynamicStats();
}

function buildLangMenu() {
  var menu = document.getElementById('lang-menu');
  if (!menu) return;
  menu.innerHTML = LANGS.map(function (l) {
    return '<button type="button" class="lang-opt" data-lang-opt="' + l[0] + '">' + l[1] + '</button>';
  }).join('');
  menu.querySelectorAll('[data-lang-opt]').forEach(function (opt) {
    opt.addEventListener('click', function () {
      applyLang(opt.getAttribute('data-lang-opt'));
      var sw = document.getElementById('lang-switch');
      if (sw) sw.classList.remove('open');
    });
  });
}

function initI18n() {
  cacheKorean();
  buildLangMenu();

  var sw = document.getElementById('lang-switch');
  var toggle = document.getElementById('lang-toggle');
  if (toggle && sw) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      sw.classList.toggle('open');
    });
    document.addEventListener('click', function () { sw.classList.remove('open'); });
  }

  var lang = null;
  try { lang = localStorage.getItem('mfai_lang'); } catch (e) {}
  if (!lang) {
    var nav = (navigator.language || 'ko').slice(0, 2).toLowerCase();
    lang = LANGS.some(function (l) { return l[0] === nav; }) ? nav : 'en';
  }
  applyLang(lang);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
window.applyLang = applyLang;
