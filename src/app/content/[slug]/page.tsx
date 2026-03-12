import Link from 'next/link';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [
    { slug: 'podcast-2026-03-12' },
    { slug: 'news-2026-03-12' },
    { slug: 'competitor-2026-03-12' },
    { slug: 'podcast-2026-03-11' },
    { slug: 'news-2026-03-11' },
    { slug: 'competitor-2026-03-11' },
  ];
}

const contentData: Record<string, { title: string; type: string; date: string; content: string }> = {
  'podcast-2026-03-12': { title: '【学习笔记】2026-03-12 | Andrej Karpathy + 戴雨森', type: 'podcast', date: '2026-03-12', content: '完整内容请查看飞书文档。' },
  'news-2026-03-12': { title: 'AI行业资讯摘要 - 2026-03-12', type: 'news', date: '2026-03-12', content: 'Amazon宣布将其Health AI健康助手扩展至Amazon网站和移动应用。' },
  'competitor-2026-03-12': { title: '竞品情报摘要 - 2026-03-12', type: 'competitor', date: '2026-03-12', content: '2026年3月9日正式推出"证元芳·MedClaw 协作体"。' },
  'podcast-2026-03-11': { title: '【学习笔记】2026-03-11 | The Diary Of A CEO', type: 'podcast', date: '2026-03-11', content: 'Steven Bartlett提出成功的四个支柱。' },
  'news-2026-03-11': { title: 'AI行业资讯摘要 - 2026-03-11', type: 'news', date: '2026-03-11', content: '智谱AI发布GLM-5大模型。' },
  'competitor-2026-03-11': { title: '竞品情报摘要 - 2026-03-11', type: 'competitor', date: '2026-03-11', content: '蚂蚁阿福用户规模突破1亿。' },
};

const typeLabels: Record<string, string> = { podcast: '播客学习', news: 'AI资讯', competitor: '竞品情报' };

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = contentData[slug] || { title: '未找到', type: 'news', date: '', content: '' };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#F5F5F7]">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight hover:text-[#0071E3]">AI Work</Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/podcast" className="hover:text-[#0071E3]">播客学习</Link>
            <Link href="/news" className="hover:text-[#0071E3]">AI资讯</Link>
            <Link href="/competitor" className="hover:text-[#0071E3]">竞品情报</Link>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider bg-white border border-[#E5E5E5] px-3 py-1 rounded-md">{typeLabels[item.type]}</span>
          <span className="text-[#86868B]">{item.date}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{item.title}</h1>
        <div className="text-lg text-[#1D1D1F] leading-relaxed">{item.content}</div>
      </main>
    </div>
  );
}
