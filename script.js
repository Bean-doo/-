(() => {
  const track = document.getElementById("chapterTrack");
  const chapters = Array.from(document.querySelectorAll(".chapter"));
  const navItems = Array.from(document.querySelectorAll(".nav-item"));
  const dots = Array.from(document.querySelectorAll(".page-dots button"));
  const slideTriggers = Array.from(document.querySelectorAll("[data-slide], [data-go-to]"));
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const starField = document.getElementById("starField");
  const photoDialog = document.getElementById("photoDialog");
  const dialogClose = document.getElementById("dialogClose");
  const caughtStarSlot = document.getElementById("caughtStarSlot");
  const revealedPhoto = document.getElementById("revealedPhoto");
  const revealedPhotoImage = document.getElementById("revealedPhotoImage");
  const photoCaption = document.getElementById("photoCaption");
  const chapterIds = chapters.map((chapter) => chapter.id);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasFlip = typeof window.gsap !== "undefined" && typeof window.Flip !== "undefined";

  if (hasFlip) window.gsap.registerPlugin(window.Flip);

  const photoSlots = [
    { src: "./assets/star-gallery/innovation-project-school.webp", alt: "河海大学大学生创新创业训练计划校级项目结题证书", caption: "一次从构思到结题的项目实践。" },
    { src: "./assets/star-gallery/innovation-project-national.webp", alt: "河海大学大学生创新创业训练计划国家级项目结题证书", caption: "把返乡人才与乡村振兴写进一项完整研究。" },
    { src: "./assets/star-gallery/academic-award.webp", alt: "河海大学2023至2024学年学业优秀奖学金证书", caption: "被认真学习留下的一份证明。" },
    { src: "./assets/star-gallery/field-interview.webp", alt: "在鸠兹湾开展田野访谈的现场照片", caption: "田野里的倾听：在真实交流中寻找故事。" },
    { src: "./assets/star-gallery/video-award-team.webp", alt: "全国高校社会调查微视频大赛获奖团队合影", caption: "和团队一起，把社会调查变成可以被看见的影像。" }
  ];
  photoSlots.forEach((photo) => {
    const preloadImage = new Image();
    preloadImage.src = photo.src;
  });

  const portfolioProcessContent = {
    "portfolio-account": [
      {
        text: "从 2025 年 11 月开始备考，到 2026 年 7 月参加考试，我持续以真实考生视角观察雅思赛道的图文与视频内容。考到雅思 7.5 分后，我把长期查阅的资料与个人实践重新整理，尝试提炼雅思写作中可复用的应试框架和底层逻辑。",
        points: ["持续观察雅思内容生态与常见表达方式", "以亲身备考和考试结果验证内容判断"]
      },
      {
        text: "备考者真正关心的不是零散技巧，而是考试的底层逻辑、可迁移的应试方法，以及可靠的语料库、真题和学习资料。面对网络信息良莠不齐的问题，我希望用结构化内容降低筛选成本。",
        points: ["核心需求：底层逻辑与通用框架", "辅助需求：可信资料、考场真题与训练方案"]
      },
      {
        text: "研究同类雅思博主后，我没有选择覆盖听说读写的全科账号，而是聚焦自己更有优势的雅思作文赛道，让内容更垂直、更容易归类，也便于长期系统沉淀写作方法。",
        points: ["垂直方向：雅思作文", "内容价值：系统归纳应试技巧与写作逻辑"]
      },
      {
        text: "确定输出方向后，我从自己的备考经历切入，策划一篇完整的入门笔记。内容涵盖学习资料选择、训练方式和考试技巧，为后续深入讲解雅思写作方法建立认知基础。",
        points: ["首篇选题：挑战自学雅思一个月提 1 分", "内容结构：资料选择—训练方法—考试技巧"]
      },
      {
        text: "内容主要使用基础修图工具和手机备忘录完成。视觉上保持简洁，把重点放在信息密度、阅读顺序和方法的可执行性上，让真正准备考试的人能够迅速找到需要的内容。",
        media: [
          { src: "./assets/portfolio-ielts/ielts-score-post.png", alt: "雅思成绩与小红书笔记封面截图", caption: "成绩证明与首篇笔记封面" },
          { src: "./assets/portfolio-ielts/ielts-note-content.png", alt: "小红书雅思学习资料笔记截图", caption: "笔记中的学习资料与备考方法" }
        ]
      },
      {
        text: "文档记录显示，笔记发布 14 天内获得约 1,855 次阅读、425 次点赞与收藏；后续后台截图显示页面观看 1,859 次、曝光 10,972 次、互动率 26%。内容深度和丰富度表现较好，也验证了垂直内容方向。",
        points: ["曝光数 10,972，封面点击率 17.1%", "互动率 26%，点赞 249、收藏 176", "平均观看时长 23 秒，新增粉丝 2"],
        media: [
          { src: "./assets/portfolio-ielts/xhs-diagnostic.png", alt: "小红书笔记诊断雷达图", caption: "笔记诊断：互动、深度与丰富度表现" },
          { src: "./assets/portfolio-ielts/xhs-performance.png", alt: "小红书笔记数据概览截图", caption: "流量转化、互动表现与内容深度数据" }
        ]
      },
      {
        text: "在发布五篇笔记后，我接到了来自“同桌英语”的商务广告合作，并独立完成选题、策划与文案撰写，稿件一次通过率达到 100%。",
        points: ["独立负责：选题—策划—文案撰写", "交付结果：稿件一次通过率 100%"]
      }
    ],
    "portfolio-video": [
      {
        text: "2024 年 7 月，我在安徽芜湖鸠兹湾开展为期一周的田野调查，访谈 30 余位基层员工、当地村民、管理人员及总经理，并将录音与专业理论整理为访谈报告。调研间隙同步采集空镜、人像和访谈素材，为后续创作打底。",
        paragraphs: ["我不是先决定拍什么，再去寻找材料，而是先在田野里听、看和记录。视频的方向，是从真实访谈与现场观察中慢慢长出来的。"],
        media: [
          { src: "./assets/portfolio-jiuziwan/field-materials.png", alt: "鸠兹湾前期调研与采风素材截图", caption: "前期调研与采风素材" }
        ]
      },
      {
        text: "初稿原本聚焦创始人的创业故事，但直接访谈与关键人物素材不足，仅靠网络资料难以支撑有感染力的叙事。经过两轮讨论，团队转向返乡青年群体，提炼组织文化如何驱动乡村创业的共同命题，并完成三版文稿迭代。",
        paragraphs: ["对我而言，换掉最初的故事不是推翻努力，而是尊重材料。与其用不足的素材拼出一个‘好看’的人物传奇，我更愿意让现场真正出现的人和他们共同的选择成为主角。"],
        mediaLayout: "stack",
        media: [
          { src: "./assets/portfolio-jiuziwan/brainstorm-first.png", alt: "鸠兹湾视频文案第一次讨论截图", caption: "视频主题切入" },
          { src: "./assets/portfolio-jiuziwan/brainstorm-second.png", alt: "鸠兹湾视频文案第二次讨论截图", caption: "视频主旋律与标题讨论" }
        ]
      },
      {
        text: "主题确定后，团队盘点现有与缺失素材，借助 AI 生成拍摄素材表，并细化到镜头类型和机位；同时联系鸠兹湾新媒体部获得补充资料，让脚本、拍摄和剪辑能够在同一套结构中衔接。",
        paragraphs: ["这一阶段我开始意识到，脚本不只是文字，更是一份执行清单。每一句旁白都需要对应可获得的画面，每一个镜头也要服务于叙事。"]
      },
      {
        text: "9 月，团队再次回到鸠兹湾，围绕已经明确的叙事方向补拍人物访谈、工作场景与过渡素材，并补充新的访谈资料，使人物观点与现场行动彼此印证。",
        paragraphs: ["第一次调研让我看见问题，第二次回访则让我带着问题重新看现场。目标更明确之后，镜头不再只是素材积累，而是在回答前期留下的空白。"]
      },
      {
        text: "10 月进入剪辑与配音阶段。团队使用剪映协作完成素材拼接、剪裁和调色，我重点负责节奏把控与片段润色，并协调播音专业同学完成配音；针对无法补拍的人物镜头，以 AI 生成画面完成必要衔接。",
        paragraphs: ["我反复调整的不是单个镜头是否漂亮，而是信息什么时候出现、情绪在哪里停顿。社会调查材料很多，真正困难的是取舍：既要准确，也要让观众愿意继续看下去。"]
      },
      {
        text: "11 月，作品入围由中央财经大学承办的“高逸杯”全国高校社会调查微视频大赛决赛。团队凭借社会学理论与真实生活经验的融合，获得全国三等奖与最佳人气奖。",
        paragraphs: ["这次经历让我确认，专业训练并不只存在于论文里。访谈、理论、叙事和影像可以共同工作，把一个地方的真实经验讲给更多人听。"],
        media: [
          { src: "./assets/portfolio-jiuziwan/award-third-prize.png", alt: "第六届全国高校社会调查微视频大赛三等奖证书", caption: "全国高校社会调查微视频大赛三等奖" },
          { src: "./assets/portfolio-jiuziwan/award-popularity.png", alt: "第六届全国高校社会调查微视频大赛最佳人气奖证书", caption: "全国高校社会调查微视频大赛最佳人气奖", rotate: true }
        ]
      }
    ],
    "portfolio-research": [
      {
        text: "项目最初选择宗教相关议题，希望借助 CGSS 数据讨论宗教与社会态度之间的关系。进入数据验证后，我发现可用样本与变量支撑不足，原有构想难以形成可靠的量化分析。",
        paragraphs: ["这是我第一次真正感受到：一个感兴趣的题目，不一定就是一个能够被当前数据回答的题目。选题的价值不仅来自想法，也来自研究问题、测量工具和样本之间是否匹配。"],
        points: ["先从个人兴趣与社会学问题意识出发", "在正式建模前检验数据能否支撑研究问题"]
      },
      {
        text: "宗教议题在 CGSS 中对应数据较少，且初步检验得到的信度、效度与相关性都偏低。继续堆叠分析无法弥补数据基础薄弱的问题，因此我停止强行解释结果，重新审视样本、变量与题目之间的关系。",
        paragraphs: ["遇到结果不理想时，我没有为了完成作业继续包装一个站不住脚的模型，而是把低相关和测量不足当作研究反馈：先诊断问题出在哪里，再决定是否值得继续。"],
        points: ["识别问题：数据稀疏、测量质量不足、变量关系过弱", "解决方式：放弃勉强建模，回到数据与文献重新选题"]
      },
      {
        text: "结合 CGSS2023 可用变量与数字化社会背景，我将问题转向“媒介类型与社会信任”。新的选题既能比较互联网与传统媒介的差异，也具备清晰的理论线索和可执行的变量路径。",
        paragraphs: ["这次转向并不是换一个更容易显著的题目，而是寻找数据真正能够回答的问题。我最终关心的是：不同媒介如何以不同方向参与社会信任的形成。"],
        points: ["研究问题一：互联网使用频率是否影响社会信任", "研究问题二：报纸、电视与互联网的作用是否不同"]
      },
      {
        text: "研究使用 CGSS2023 的 6,982 个有效样本。社会信任（A33）为因变量；互联网（A285）、报纸（A281）与电视（A284）使用频率为核心自变量，并纳入性别、出生年份、教育、收入、户口、社会联系及主要信息来源等控制变量。",
        paragraphs: ["变量设计的关键，是把抽象的“媒介使用”和“社会信任”落实到可比较的题项，同时控制可能同时影响信任与媒介选择的人口学因素。"],
        points: ["因变量：社会信任，1—5 连续变量", "核心自变量：三类媒介使用频率，统一为 1—5", "控制变量：人口学、社会联系与信息来源"],
        media: [
          { src: "./assets/portfolio-quant/variables-06.png", alt: "定量研究变量关系表", caption: "变量、CGSS 问卷编号与测量方式" }
        ]
      },
      {
        text: "在 SPSS 25.0 中完成数据整理后，我先用描述性统计检查样本与变量分布，再用 Pearson 相关分析观察三类媒介与社会信任的初步关系，为后续回归模型提供方向判断。",
        paragraphs: ["我把分析拆成由浅入深的步骤：先确认数据长什么样，再看变量是否共同变化，最后才进入控制其他因素后的模型。这样可以避免只盯着最终显著性，而忽略数据本身。"],
        points: ["描述统计：均值、标准差与有效个案数", "Pearson 相关：互联网 -0.034，报纸 0.087，电视 0.106", "初步方向：互联网负相关，报纸与电视正相关"],
        media: [
          { src: "./assets/portfolio-quant/descriptive-07.png", alt: "定量研究描述性统计表", caption: "描述性统计与研究方法" },
          { src: "./assets/portfolio-quant/correlation-09.png", alt: "社会信任与媒介使用相关性矩阵", caption: "社会信任与三类媒介使用的相关性矩阵" }
        ]
      },
      {
        text: "我构建三个嵌套模型：模型一仅纳入控制变量；模型二加入互联网使用；模型三再加入报纸与电视。通过比较 ΔR²、标准化 Beta 与显著性，区分三类媒介在相同控制条件下的独立作用。",
        paragraphs: ["分层回归最有价值的地方，是把“相关”进一步拆开：新增变量究竟解释了多少、方向是否稳定、不同媒介放入同一模型后谁的作用更强。"],
        points: ["模型二加入互联网后，ΔR²=0.0026，p<0.001", "模型三加入报纸与电视后，ΔR²=0.0150，p<0.001", "完整模型：互联网 β=-0.047；报纸 β=0.065；电视 β=0.096"],
        media: [
          { src: "./assets/portfolio-quant/regression-10.png", alt: "分层回归模型摘要与系数表", caption: "三层模型摘要与完整模型系数" },
          { src: "./assets/portfolio-quant/comparison-11.png", alt: "互联网、报纸与电视回归结果比较", caption: "三类媒介的方向、标准化系数与显著性比较" }
        ]
      },
      {
        text: "在控制人口学与社会联系变量后，互联网使用与社会信任呈显著负向关联，报纸和电视呈显著正向关联，且电视作用最强。但完整模型调整后 R² 仅为 2.12%，因此结论应被理解为相关关系，而非因果证明。",
        paragraphs: ["对我来说，专业的数据分析不只是得到显著结果，也包括知道结果能说到哪里。横截面数据、较低解释力和未区分具体使用情境，都是这项研究必须坦诚面对的边界。"],
        points: ["核心发现：不同媒介的影响方向与强度存在差异", "解释边界：横截面设计不能确认因果", "后续改进：细分媒介内容与场景，并进行群体异质性分析"]
      }
    ]
  };

  let activeIndex = 0;
  let hasInitialized = false;
  let touchStartX = 0;
  let touchStartY = 0;
  let caughtStar = null;
  let lastPhotoIndex = -1;
  const scrambleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789海潮星光·";
  const scrambleFrames = new WeakMap();

  const scrambleText = (element, delay = 0) => {
    const original = element.dataset.scrambleText || element.textContent;
    element.dataset.scrambleText = original;
    element.setAttribute("aria-label", original);
    const previousFrame = scrambleFrames.get(element);
    if (previousFrame) cancelAnimationFrame(previousFrame);
    if (reduceMotion) {
      element.textContent = original;
      return;
    }

    const letters = Array.from(original);
    const startedAt = performance.now() + delay;
    const duration = 950;
    const render = (now) => {
      if (now < startedAt) {
        scrambleFrames.set(element, requestAnimationFrame(render));
        return;
      }
      const progress = Math.min(1, (now - startedAt) / duration);
      const resolved = Math.floor(progress * letters.length);
      element.textContent = letters.map((letter, index) => {
        if (/\s/.test(letter) || index < resolved) return letter;
        return scrambleCharacters[Math.floor(Math.random() * scrambleCharacters.length)];
      }).join("");
      if (progress < 1) scrambleFrames.set(element, requestAnimationFrame(render));
      else element.textContent = original;
    };
    scrambleFrames.set(element, requestAnimationFrame(render));
  };

  const runMoreScramble = () => {
    document.querySelectorAll("#more [data-scramble]").forEach((element, index) => {
      scrambleText(element, index * 140);
    });
  };

  const initClickSpark = () => {
    if (reduceMotion) return;
    const canvas = document.createElement("canvas");
    canvas.className = "click-spark-canvas";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);
    const context = canvas.getContext("2d");
    const sparkColor = "#fff";
    const sparkSize = 10;
    const sparkRadius = 15;
    const sparkCount = 8;
    const duration = 400;
    let sparks = [];
    let animationFrame = 0;

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * pixelRatio);
      canvas.height = Math.round(window.innerHeight * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = (timestamp) => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      sparks = sparks.filter((spark) => {
        const progress = (timestamp - spark.startTime) / duration;
        if (progress >= 1) return false;
        const eased = progress * (2 - progress);
        const distance = eased * sparkRadius;
        const lineLength = sparkSize * (1 - eased);
        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);
        context.strokeStyle = sparkColor;
        context.lineWidth = 2;
        context.lineCap = "round";
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        return true;
      });
      animationFrame = sparks.length ? requestAnimationFrame(draw) : 0;
    };

    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.addEventListener("click", (event) => {
      const startTime = performance.now();
      for (let index = 0; index < sparkCount; index += 1) {
        sparks.push({
          x: event.clientX,
          y: event.clientY,
          angle: (Math.PI * 2 * index) / sparkCount,
          startTime
        });
      }
      if (!animationFrame) animationFrame = requestAnimationFrame(draw);
    });
    resizeCanvas();
  };

  const indexFromHash = () => {
    const id = window.location.hash.slice(1);
    const index = chapterIds.indexOf(id);
    return index >= 0 ? index : 0;
  };

  const setActive = (requestedIndex, updateHash = true) => {
    const previousIndex = activeIndex;
    activeIndex = Math.max(0, Math.min(chapters.length - 1, requestedIndex));
    track.style.transform = `translate3d(-${activeIndex * 100}vw, 0, 0)`;
    document.body.dataset.slide = String(activeIndex);
    navItems.forEach((item, index) => {
      const isActive = index === activeIndex;
      item.classList.toggle("is-active", isActive);
      if (isActive) item.setAttribute("aria-current", "page");
      else item.removeAttribute("aria-current");
    });
    dots.forEach((dot, index) => dot.classList.toggle("is-active", index === activeIndex));
    prevButton.disabled = activeIndex === 0;
    nextButton.disabled = activeIndex === chapters.length - 1;
    if (updateHash) history.replaceState(null, "", `#${chapterIds[activeIndex]}`);
    if (chapterIds[activeIndex] === "more" && chapterIds[previousIndex] !== "more") requestAnimationFrame(runMoreScramble);

    if (hasInitialized && hasFlip && !reduceMotion && previousIndex !== activeIndex) {
      const enteringChapter = chapters[activeIndex];
      const fromRight = activeIndex > previousIndex;
      window.gsap.killTweensOf(enteringChapter);
      window.gsap.fromTo(enteringChapter, {
        clipPath: fromRight ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)"
      }, {
        clipPath: "inset(0 0% 0 0%)",
        duration: .78,
        ease: "power3.out",
        easeReverse: "power2.out",
        clearProps: "clipPath"
      });
    }
  };

  slideTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      if (trigger.tagName === "A") event.preventDefault();
      setActive(Number(trigger.dataset.slide ?? trigger.dataset.goTo));
    });
  });
  prevButton.addEventListener("click", () => setActive(activeIndex - 1));
  nextButton.addEventListener("click", () => setActive(activeIndex + 1));

  document.addEventListener("keydown", (event) => {
    if (photoDialog.open || event.target.closest("button, a, input, textarea, select")) return;
    if (event.key === "ArrowLeft") setActive(activeIndex - 1);
    if (event.key === "ArrowRight") setActive(activeIndex + 1);
  });
  track.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
    touchStartY = event.changedTouches[0].clientY;
  }, { passive: true });
  track.addEventListener("touchend", (event) => {
    const deltaX = event.changedTouches[0].clientX - touchStartX;
    const deltaY = event.changedTouches[0].clientY - touchStartY;
    if (Math.abs(deltaX) < 60 || Math.abs(deltaX) < Math.abs(deltaY)) return;
    setActive(activeIndex + (deltaX < 0 ? 1 : -1));
  }, { passive: true });

  const restoreCaughtStar = () => {
    if (!caughtStar) return;
    caughtStar.classList.remove("is-caught");
    starField.appendChild(caughtStar);
    caughtStar = null;
  };

  const showRandomPhoto = (star) => {
    let photoIndex = Math.floor(Math.random() * photoSlots.length);
    if (photoSlots.length > 1) {
      while (photoIndex === lastPhotoIndex) photoIndex = Math.floor(Math.random() * photoSlots.length);
    }
    lastPhotoIndex = photoIndex;
    const photo = photoSlots[photoIndex];
    revealedPhotoImage.src = photo.src;
    revealedPhotoImage.alt = photo.alt;
    photoCaption.textContent = photo.caption;
    const state = hasFlip && !reduceMotion ? window.Flip.getState(star) : null;
    caughtStar = star;
    photoDialog.showModal();
    star.classList.add("is-caught");
    caughtStarSlot.appendChild(star);

    if (state) {
      window.Flip.from(state, {
        targets: star,
        duration: .9,
        ease: "power1.inOut",
        absolute: true,
        scale: true,
        spin: 1
      });
      window.gsap.fromTo(photoDialog, { opacity: 0 }, { opacity: 1, duration: .45, ease: "power1.out" });
      window.gsap.fromTo(revealedPhotoImage, { opacity: 0, scale: .96 }, { opacity: 1, scale: 1, duration: .55, ease: "power2.out" });
    }
  };

  const makeStars = () => {
    const symbols = ["☆", "✦", "✧"];
    for (let index = 0; index < 20; index += 1) {
      const star = document.createElement("button");
      star.type = "button";
      star.className = "catch-star";
      star.textContent = symbols[index % symbols.length];
      star.setAttribute("aria-label", "抓住星星，随机查看一张照片");
      star.style.left = `${4 + Math.random() * 90}%`;
      star.style.top = `${6 + Math.random() * 78}%`;
      star.style.setProperty("--star-size", `${22 + Math.random() * 28}px`);
      star.style.setProperty("--duration", `${4.8 + Math.random() * 5}s`);
      star.style.setProperty("--delay", `${-Math.random() * 8}s`);
      star.style.setProperty("--move-x", `${-35 + Math.random() * 70}px`);
      star.style.setProperty("--move-y", `${-25 + Math.random() * 50}px`);
      star.addEventListener("click", () => showRandomPhoto(star));
      starField.appendChild(star);
    }
  };

  document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const items = Array.from(document.querySelectorAll(".accordion-item"));
      const state = hasFlip && !reduceMotion ? window.Flip.getState(items) : null;
      const item = trigger.closest(".accordion-item");
      const panel = document.getElementById(trigger.getAttribute("aria-controls"));
      const wasOpen = trigger.getAttribute("aria-expanded") === "true";

      trigger.setAttribute("aria-expanded", String(!wasOpen));
      item.classList.toggle("is-open", !wasOpen);
      trigger.querySelector(".accordion-icon").textContent = wasOpen ? "＋" : "−";
      panel.hidden = wasOpen;

      if (state) window.Flip.from(state, { duration: .55, ease: "power1.inOut", absolute: false });
    });
  });

  const animateProcessCard = (card, shouldOpen, delay = 0) => {
    const body = card.querySelector(".process-card-body");
    if (!body || card.open === shouldOpen) return;

    const run = () => {
      if (!hasFlip || reduceMotion) {
        card.open = shouldOpen;
        return;
      }

      window.gsap.killTweensOf(body);
      if (shouldOpen) {
        card.open = true;
        window.gsap.fromTo(body, {
          height: 0,
          opacity: 0,
          paddingTop: 0,
          paddingBottom: 0
        }, {
          height: "auto",
          opacity: 1,
          paddingTop: "1rem",
          paddingBottom: "1rem",
          duration: .62,
          ease: "power2.out",
          easeReverse: "power2.out",
          clearProps: "height,opacity,paddingTop,paddingBottom"
        });
      } else {
        window.gsap.to(body, {
          height: 0,
          opacity: 0,
          paddingTop: 0,
          paddingBottom: 0,
          duration: .48,
          ease: "power2.inOut",
          easeReverse: "power2.out",
          onComplete: () => {
            card.open = false;
            window.gsap.set(body, { clearProps: "height,opacity,paddingTop,paddingBottom" });
          }
        });
      }
    };

    if (delay > 0 && hasFlip && !reduceMotion) window.gsap.delayedCall(delay, run);
    else run();
  };

  const buildProcessCards = () => {
    document.querySelectorAll(".portfolio-panel").forEach((panel) => {
      const cardsContainer = panel.querySelector("[data-card-context]");
      const axisItems = Array.from(panel.querySelectorAll(".thought-axis li"));
      if (!cardsContainer || !axisItems.length) return;

      const context = cardsContainer.dataset.cardContext;
      const toolbar = document.createElement("div");
      toolbar.className = "process-card-tools";
      const expandAll = document.createElement("button");
      expandAll.type = "button";
      expandAll.textContent = "全部展开";
      const collapseAll = document.createElement("button");
      collapseAll.type = "button";
      collapseAll.textContent = "全部收起";
      toolbar.append(expandAll, collapseAll);
      cardsContainer.appendChild(toolbar);

      const detailsList = axisItems.map((item, index) => {
        const number = item.querySelector("span")?.textContent || String(index + 1).padStart(2, "0");
        const title = item.textContent.replace(number, "").trim();
        const cardId = `${panel.id}-step-${index + 1}`;

        item.textContent = "";
        const axisButton = document.createElement("button");
        axisButton.type = "button";
        axisButton.className = "thought-step";
        axisButton.setAttribute("aria-controls", cardId);
        axisButton.setAttribute("aria-expanded", String(index === 0));
        const axisNumber = document.createElement("span");
        axisNumber.textContent = number;
        const axisTitle = document.createElement("strong");
        axisTitle.textContent = title;
        axisButton.append(axisNumber, axisTitle);
        item.appendChild(axisButton);

        const card = document.createElement("details");
        card.className = "process-card";
        card.id = cardId;
        card.open = index === 0;
        const summary = document.createElement("summary");
        const cardNumber = document.createElement("span");
        cardNumber.textContent = number;
        const cardTitle = document.createElement("strong");
        cardTitle.textContent = title;
        const icon = document.createElement("i");
        icon.setAttribute("aria-hidden", "true");
        icon.textContent = "＋";
        summary.append(cardNumber, cardTitle, icon);
        const body = document.createElement("div");
        body.className = "process-card-body";
        const stepContent = portfolioProcessContent[panel.id]?.[index];

        if (stepContent?.text) {
          const note = document.createElement("blockquote");
          note.className = "process-note";
          const noteCopy = document.createElement("p");
          noteCopy.textContent = stepContent.text;
          note.appendChild(noteCopy);
          body.appendChild(note);
        }

        if (stepContent?.paragraphs?.length) {
          const personal = document.createElement("div");
          personal.className = "process-personal";
          stepContent.paragraphs.forEach((paragraph) => {
            const sourceParagraph = document.createElement("p");
            sourceParagraph.className = "process-source-paragraph";
            sourceParagraph.textContent = paragraph;
            personal.appendChild(sourceParagraph);
          });
          body.appendChild(personal);
        } else if (!stepContent) {
          const placeholderCopy = document.createElement("p");
          placeholderCopy.textContent = `内容占位：后续补充“${context} · ${title}”阶段的判断、过程材料与复盘。`;
          body.appendChild(placeholderCopy);
        }

        if (stepContent?.points?.length) {
          const points = document.createElement("ul");
          points.className = "process-points";
          stepContent.points.forEach((point) => {
            const listItem = document.createElement("li");
            listItem.textContent = point;
            points.appendChild(listItem);
          });
          body.appendChild(points);
        }

        if (stepContent?.media?.length) {
          const gallery = document.createElement("div");
          gallery.className = "process-media-grid";
          if (stepContent.mediaLayout === "stack") gallery.classList.add("is-stacked");
          stepContent.media.forEach((media) => {
            const figure = document.createElement("figure");
            figure.className = "process-media-card";
            const link = document.createElement("a");
            link.href = media.src;
            link.target = "_blank";
            link.rel = "noreferrer";
            link.setAttribute("aria-label", `${media.caption}，打开原图`);
            const image = document.createElement("img");
            image.src = media.src;
            image.alt = media.alt;
            image.loading = "lazy";
            image.decoding = "async";
            if (media.rotate) figure.classList.add("is-rotated");
            link.appendChild(image);
            const caption = document.createElement("figcaption");
            caption.textContent = media.caption;
            figure.append(link, caption);
            gallery.appendChild(figure);
          });
          body.appendChild(gallery);
        } else if (!stepContent) {
          const placeholders = document.createElement("div");
          placeholders.className = "portfolio-placeholders";
          placeholders.innerHTML = "<span>过程材料占位</span><span>思考内容占位</span>";
          body.appendChild(placeholders);
        }
        card.append(summary, body);
        cardsContainer.appendChild(card);

        summary.addEventListener("click", (event) => {
          event.preventDefault();
          animateProcessCard(card, !card.open);
        });

        axisButton.addEventListener("click", () => {
          animateProcessCard(card, true);
          axisItems.forEach((otherItem) => otherItem.classList.remove("is-current"));
          item.classList.add("is-current");
          requestAnimationFrame(() => {
            const chapter = panel.closest(".chapter");
            const targetTop = Math.max(0, chapter.scrollTop + card.getBoundingClientRect().top - chapter.getBoundingClientRect().top - 90);
            chapter.scrollTo({ top: targetTop, behavior: reduceMotion ? "auto" : "smooth" });
            summary.focus({ preventScroll: true });
          });
        });
        card.addEventListener("toggle", () => axisButton.setAttribute("aria-expanded", String(card.open)));
        return card;
      });

      expandAll.addEventListener("click", () => {
        detailsList.forEach((card, index) => animateProcessCard(card, true, index * .085));
      });
      collapseAll.addEventListener("click", () => {
        detailsList.forEach((card, index) => animateProcessCard(card, false, index * .07));
      });
    });
  };

  document.querySelectorAll(".portfolio-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const oldPanel = document.querySelector(".portfolio-panel.is-active");
      const newPanel = document.getElementById(`portfolio-${tab.dataset.portfolio}`);
      if (!newPanel || oldPanel === newPanel) return;
      const state = hasFlip && !reduceMotion ? window.Flip.getState(oldPanel) : null;

      document.querySelectorAll(".portfolio-tab").forEach((otherTab) => {
        const isActive = otherTab === tab;
        otherTab.classList.toggle("is-active", isActive);
        otherTab.setAttribute("aria-selected", String(isActive));
      });
      oldPanel.classList.remove("is-active");
      oldPanel.hidden = true;
      newPanel.hidden = false;
      newPanel.classList.add("is-active");

      if (state) {
        window.Flip.from(state, {
          targets: newPanel,
          duration: .7,
          ease: "power1.inOut",
          fade: true,
          absolute: true,
          onEnter: (elements) => window.gsap.fromTo(elements, { opacity: 0 }, { opacity: 1, duration: .45 })
        });
      }
    });
  });

  document.querySelectorAll(".story-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const oldPanel = document.querySelector(".story-panel.is-active");
      const targetId = `${tab.dataset.story}-panel`;
      const newPanel = document.getElementById(targetId);
      if (oldPanel === newPanel) return;
      const state = hasFlip && !reduceMotion ? window.Flip.getState(oldPanel) : null;

      document.querySelectorAll(".story-tab").forEach((otherTab) => {
        const isActive = otherTab === tab;
        otherTab.classList.toggle("is-active", isActive);
        otherTab.setAttribute("aria-selected", String(isActive));
      });
      oldPanel.classList.remove("is-active");
      oldPanel.hidden = true;
      newPanel.hidden = false;
      newPanel.classList.add("is-active");

      if (state) {
        window.Flip.from(state, {
          targets: newPanel,
          duration: .7,
          ease: "power1.inOut",
          fade: true,
          absolute: true,
          onEnter: (elements) => window.gsap.fromTo(elements, { opacity: 0 }, { opacity: 1, duration: .45 })
        });
      }
    });
  });

  dialogClose.addEventListener("click", () => photoDialog.close());
  photoDialog.addEventListener("click", (event) => {
    if (event.target === photoDialog) photoDialog.close();
  });
  photoDialog.addEventListener("close", restoreCaughtStar);
  window.addEventListener("hashchange", () => setActive(indexFromHash(), false));

  buildProcessCards();
  initClickSpark();
  makeStars();
  track.style.transition = "none";
  setActive(indexFromHash(), false);
  const requestedPortfolio = new URLSearchParams(window.location.search).get("portfolio");
  if (["video", "research"].includes(requestedPortfolio)) {
    document.querySelector(`.portfolio-tab[data-portfolio="${requestedPortfolio}"]`)?.click();
  }
  hasInitialized = true;
  requestAnimationFrame(() => requestAnimationFrame(() => track.style.removeProperty("transition")));
})();
