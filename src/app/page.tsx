import Link from 'next/link';

export const dynamic = 'force-static';

const content = [
  { slug: 'podcast-2026-03-12', title: '【学习笔记】2026-03-12 | Andrej Karpathy + 戴雨森', type: 'podcast', date: '2026-03-12', excerpt: '完整内容见飞书文档...' },
  { slug: 'news-2026-03-12', title: 'AI行业资讯摘要 - 2026-03-12', type: 'news', date: '2026-03-12', excerpt: 'Amazon宣布将其Health AI健康助手扩展...' },
  { slug: 'competitor-2026-03-12', title: '竞品情报摘要 - 2026-03-12', type: 'competitor', date: '2026-03-12', excerpt: '2026年3月9日正式推出"证元芳·MedClaw 协作体"...' },
  { slug: 'podcast-2026-03-11', title: '【学习笔记】2026-03-11 | The Diary Of A CEO', type: 'podcast', date: '2026-03-11', excerpt: 'Steven Bartlett提出成功的四个支柱...' },
  { slug: 'news-2026-03-11', title: 'AI行业资讯摘要 - 2026-03-11', type: 'news', date: '2026-03-11', excerpt: '智谱AI发布GLM-5大模型...' },
  { slug: 'competitor-2026-03-11', title: '竞品情报摘要 - 2026-03-11', type: 'competitor', date: '2026-03-11', excerpt: '蚂蚁阿福用户规模突破1亿...' },
];

const typeLabels: Record<string, string> = { podcast: '播客学习', news: 'AI资讯', competitor: '竞品情报' };

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#F5F5F7]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight hover:text-[#0071E3] transition-colors">AI Work</Link>
          <nav className="flex items-center gap-8 text-[15px] font-medium">
            <Link href="/podcast" className="hover:text-[#0071E3] transition-colors">播客学习</Link>
            <Link href="/news" className="hover:text-[#0071E3] transition-colors">AI资讯</Link>
            <Link href="/competitor" className="hover:text-[#0071E3] transition-colors">竞品情报</Link>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-24">
        <section className="max-w-5xl mx-auto px-6 mb-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in">Thinking in AI</h1>
          <p className="text-xl md:text-2xl text-[#86868B] font-medium opacity-0 animate-fade-in stagger-1">记录AI学习与思考的碎片</p>
        </section>

        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-semibold">最新内容</h2>
            <Link href="/all" className="text-[#0071E3] font-medium hover:underline">查看全部 →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.map((item, i) => (
              <Link key={item.slug} href={`/content/${item.slug}`} className="block bg-[#F5F5F7] rounded-xl p-6 hover:bg-[#E5E5EA] transition-all duration-300 opacity-0 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider bg-white px-3 py-1 rounded-full shadow-sm">{typeLabels[item.type]}</span>
                  <span className="text-sm text-[#86868B]">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-[#86868B] text-sm line-clamp-2">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-6">
            {['podcast', 'news', 'competitor'].map((type) => (
              <Link key={type} href={`/${type}`} className="block bg-[#F5F5F7] rounded-xl p-6 text-center hover:bg-[#E5E5EA] transition-all duration-300">
                <span className="text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider bg-white px-3 py-1 rounded-full shadow-sm">{typeLabels[type]}</span>
                <p className="text-[#86868B] text-sm mt-4">查看全部 →</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#F5F5F7] py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#86868B]">© 2026 AI Work. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-[#86868B]">
            <span>极简设计</span>
            <span>优雅排版</span>
            <span>聚焦内容</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
