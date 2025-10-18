export default function AdSlot({ position='top' }) {
  const client = typeof window !== 'undefined' ? (localStorage.getItem('ADSENSE_KEY') || process.env.NEXT_PUBLIC_ADSENSE_CLIENT) : process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  return (
    <div style={{ margin: '12px 0', padding:12, border:'1px dashed #ccc', textAlign:'center' }}>
      <div>Ad slot ({position})</div>
      <div style={{ fontSize:12, color:'#666' }}>{client ? `AdSense: ${client}` : 'No AdSense key set. Add NEXT_PUBLIC_ADSENSE_CLIENT in Vercel or paste into Settings.'}</div>
    </div>
  );
}
