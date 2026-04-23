import { counter } from '@/data/counter';
import Link from 'next/link';

export default function CounterBlog(){
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            minHeight: '200px'
        }}>
            {counter.map((item, ind)=>(
                <div key={ind}
                    className="wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay={`${0.2 * (ind + 1)}s`}
                    style={{
                        flex: '1 1 280px',
                        maxWidth: '340px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '40px 28px',
                        background: 'rgba(255,255,255,0.08)',
                        borderRadius: '16px',
                        backdropFilter: 'blur(8px)'
                    }}
                >
                    <div className={`icon-bx-sm radius ${item.designStyle}`}
                        style={{ marginBottom: '20px' }}
                    >
                        <Link href="#" scroll={false} className="icon-cell">
                            <i className={item.iconName} />
                        </Link>
                    </div>
                    <h5 style={{ color: '#fff', fontWeight: 700, marginBottom: '8px' }}>
                        {item.title}
                    </h5>
                    <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, fontSize: '14px', lineHeight: 1.6 }}>
                        {item.subtitle}
                    </p>
                </div>
            ))}
        </div>
    )
}