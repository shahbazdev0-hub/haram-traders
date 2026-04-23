// components/ValuePropsBlog.jsx

export default function ValuePropsBlog() {
    const items = [
        {
            id: 1,
            title: "Proven Success",
            desc: "We deliver measurable results that help businesses grow",
        },
        {
            id: 2,
            title: "Tailored Solutions for Your Needs",
            desc: "Our every strategy is customized to fit your unique goals or destination",
        },
        {
            id: 3,
            title: "Client-Centered Approach",
            desc: "We prioritize your success with ongoing, personalized support",
        },
    ];

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: '0',
            // background: '#f7f8fa',
            borderRadius: '16px',
            overflow: 'hidden',
            // border: '1px solid #ebebeb'
        }}>
            {items.map((item, ind) => (
                <div key={item.id} style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '48px 40px',
                    borderRight: ind < items.length - 1 ? '1px solid #e0e0e0' : 'none',
                }}>
                    {/* Icon */}
                    <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: '#e6f4f2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '28px'
                    }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2aa89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                    </div>

                    {/* Title */}
                    <h5 style={{
                        fontWeight: 700,
                        fontSize: '17px',
                        color: '#111',
                        marginBottom: '12px',
                        lineHeight: 1.3
                    }}>
                        {item.title}
                    </h5>

                    {/* Description */}
                    <p style={{
                        fontSize: '14px',
                        color: '#666',
                        lineHeight: 1.7,
                        margin: 0,
                        maxWidth: '260px'
                    }}>
                        {item.desc}
                    </p>
                </div>
            ))}
        </div>
    );
}