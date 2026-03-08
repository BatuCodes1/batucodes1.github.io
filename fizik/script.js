const DATA = [
{
  id: 'hareket',
  icon: '🚀',
  title: 'Kinematik — Hareket',
  subtitle: 'Düzgün ve ivmeli hareket denklemleri',
  levels: ['tyt','ayt'],
  formulas: [
    { name: 'Ortalama Hız', eq: 'v_ort = Δx / Δt = (v₀ + v) / 2', vars: [['v_ort','ortalama hız (m/s)'],['Δx','konum değişimi (m)'],['Δt','zaman (s)']], note: 'İkinci eşitlik yalnızca sabit ivmeli harekette geçerlidir.' },
    { name: 'İvmeli Hareket — Hız', eq: 'v = v₀ + a·t', vars: [['v₀','başlangıç hızı (m/s)'],['a','ivme (m/s²)'],['t','zaman (s)']], note: 'Sabit ivmeli harekette geçerlidir. a > 0 ise hızlanma, a < 0 ise yavaşlama.' },
    { name: 'İvmeli Hareket — Konum', eq: 'x = x₀ + v₀·t + ½·a·t²', vars: [['x','son konum (m)'],['x₀','başlangıç konumu'],['v₀','başlangıç hızı'],['a','ivme'],['t','zaman']], note: 'x₀ = 0 alınırsa x = v₀·t + ½·a·t² olur.' },
    { name: 'Hız-Konum Bağıntısı', eq: 'v² = v₀² + 2·a·Δx', vars: [['v','son hız'],['v₀','ilk hız'],['a','ivme'],['Δx','yer değiştirme (m)']], note: 'Zaman bilinmiyorsa bu denklem kullanılır.' },
    { name: 'Ortalama İvme', eq: 'a = Δv / Δt = (v − v₀) / t', vars: [['a','ivme (m/s²)'],['Δv','hız değişimi']], note: 'v-t grafiğinin eğimi ivmeyi verir.' },
    { name: 'Serbest Düşme', eq: 'h = ½·g·t²   |   v = g·t', vars: [['h','yükseklik (m)'],['g','9,8 m/s²'],['t','süre (s)']], note: 'Hava direnci ihmal edilir. v₀ = 0 durumu. v² = 2·g·h bağıntısı da kullanılır.' },
    { name: 'Yatay Atış — Yatay', eq: 'x = v₀·t', vars: [['x','yatay mesafe (m)'],['v₀','ilk yatay hız (m/s)'],['t','zaman (s)']], note: 'Yatay yönde ivme sıfırdır; hız sabittir.' },
    { name: 'Yatay Atış — Düşey', eq: 'y = ½·g·t²   |   vᵧ = g·t', vars: [['y','düşey mesafe (m)'],['vᵧ','düşey hız bileşeni']], note: 'Düşey yönde serbest düşme, yatay yönde sabit hız vardır.' },
    { name: 'Eğik Atış — Bileşenler', eq: 'vₓ = v₀·cos θ   |   vᵧ = v₀·sin θ − g·t', vars: [['vₓ','yatay hız bileşeni'],['vᵧ','düşey hız bileşeni'],['θ','atış açısı']], note: 'Maksimum yükseklikte vᵧ = 0 olur.' },
    { name: 'Eğik Atış — Menzil', eq: 'R = v₀²·sin(2θ) / g', vars: [['R','menzil (m)'],['v₀','ilk hız (m/s)'],['θ','atış açısı']], note: 'Maksimum menzil θ = 45° de elde edilir. Tamamlayıcı açılar (30°-60°) eşit menzil verir.' },
    { name: 'Eğik Atış — Maks. Yükseklik', eq: 'H = v₀²·sin²θ / (2g)', vars: [['H','maksimum yükseklik']], note: 'θ = 90° de maksimum yükseklik elde edilir.' },
  ]
},
{
  id: 'dinamik',
  icon: '⚖️',
  title: 'Dinamik — Kuvvet & Newton',
  subtitle: 'Newtonun hareket yasaları',
  levels: ['tyt','ayt'],
  formulas: [
    { name: 'Newton 1. Yasa (Eylemsizlik)', eq: 'ΣF = 0  ⟹  a = 0', vars: [], note: 'Net kuvvet sıfırsa cisim durur ya da sabit hızla hareket eder.' },
    { name: 'Newton 2. Yasa', eq: 'ΣF = m · a', vars: [['ΣF','net (bileşke) kuvvet (N)'],['m','kütle (kg)'],['a','ivme (m/s²)']], note: 'Net kuvvet, tüm kuvvetlerin vektör toplamıdır. Yönü ivmenin yönüdür.' },
    { name: 'Ağırlık Kuvveti', eq: 'G = m · g', vars: [['G','ağırlık (N)'],['m','kütle (kg)'],['g','9,8 m/s²']], note: 'Yüzeyden uzaklaştıkça g azalır. Kütle her yerde aynı kalır.' },
    { name: 'Sürtünme Kuvveti', eq: 'f = μ · N', vars: [['f','sürtünme kuvveti (N)'],['μ','sürtünme katsayısı'],['N','normal kuvvet (N)']], note: 'Kinetik μₖ, statik μₛ\'den küçüktür (μₖ < μₛ). Yüzey pürüzlülüğüne bağlıdır.' },
    { name: 'Newton 3. Yasa', eq: 'F₁₂ = −F₂₁', vars: [['F₁₂','1\'in 2\'ye uyguladığı kuvvet']], note: 'Etki-tepki kuvvetleri: aynı doğru, zıt yön, eşit büyüklük. Farklı cisimlere uygulanır.' },
    { name: 'Eğik Düzlemde Denge', eq: 'F_parallel = m·g·sinθ   |   N = m·g·cosθ', vars: [['θ','eğim açısı']], note: 'Sürtünmesiz eğik düzlemde: a = g·sinθ' },
    { name: 'Asansör — İvmeli', eq: 'N = m·(g + a)  ya da  m·(g − a)', vars: [['N','görünür ağırlık (N)'],['a','ivme (m/s²)']], note: 'Yukarı ivmelenince N > G (ağırlaşma), aşağı ivmelenince N < G (hafifleşme). Serbest düşmede N = 0.' },
  ]
},
{
  id: 'is_enerji',
  icon: '⚡',
  title: 'İş, Enerji & Güç',
  subtitle: 'Enerji dönüşümleri ve korunumu',
  levels: ['tyt','ayt'],
  formulas: [
    { name: 'İş', eq: 'W = F · d · cos(θ)', vars: [['W','iş (J)'],['F','kuvvet (N)'],['d','yol (m)'],['θ','kuvvet-yol açısı']], note: 'θ = 90° ise iş = 0; kuvvet yola dik ise iş yapmaz.' },
    { name: 'Kinetik Enerji', eq: 'Eₖ = ½ · m · v²', vars: [['Eₖ','kinetik enerji (J)'],['m','kütle'],['v','hız']], note: 'İş-enerji teoremi: W_net = ΔEₖ' },
    { name: 'Potansiyel Enerji', eq: 'Eₚ = m · g · h', vars: [['Eₚ','potansiyel enerji'],['h','yükseklik (m)']], note: 'Referans noktası seçimi sonucu değiştirmez.' },
    { name: 'Mekanik Enerji Korunumu', eq: 'Eₖ₁ + Eₚ₁ = Eₖ₂ + Eₚ₂', vars: [], note: 'Sürtünme yoksa toplam mekanik enerji sabit kalır.' },
    { name: 'Güç', eq: 'P = W / t = F · v', vars: [['P','güç (W)'],['W','iş (J)'],['t','süre (s)']], note: '1 HP ≈ 746 W.' },
    { name: 'Yay Potansiyel Enerjisi', eq: 'Eₛ = ½ · k · x²', vars: [['k','yay sabiti (N/m)'],['x','uzama/sıkışma (m)']], note: 'Hooke yasası: F = k·x ile birlikte kullanılır.' },
  ]
},
{
  id: 'momentum',
  icon: '💥',
  title: 'Momentum & İmpuls',
  subtitle: 'Çarpışma ve korunum yasaları',
  levels: ['tyt','ayt'],
  formulas: [
    { name: 'Momentum', eq: 'p = m · v', vars: [['p','momentum (kg·m/s)'],['m','kütle (kg)'],['v','hız (m/s)']], note: 'Vektörel büyüklüktür; yönü hız yönündedir. SI birimi kg·m/s = N·s.' },
    { name: 'İmpuls', eq: 'J = F · Δt = Δp = m·v − m·v₀', vars: [['J','impuls (N·s)'],['Δt','etki süresi (s)'],['Δp','momentum değişimi']], note: 'F-t grafiğinin altındaki alan impulsu verir. Kısa sürede büyük kuvvet → büyük impuls.' },
    { name: 'Momentum Korunumu', eq: 'Σpᵢ = Σpf  →  m₁v₁ + m₂v₂ = m₁v₁\' + m₂v₂\'', vars: [], note: 'Sisteme dışarıdan net kuvvet etki etmiyorsa toplam momentum sabit kalır.' },
    { name: 'Tamamen Esnek Çarpışma', eq: 'v₁\' = (m₁−m₂)v₁ / (m₁+m₂)\nv₂\' = 2m₁v₁ / (m₁+m₂)', vars: [], note: 'Hem kinetik enerji hem de momentum korunur. m₁ = m₂ ise hızlar yer değiştirir.' },
    { name: 'Tamamen Esnek Olmayan', eq: 'm₁v₁ + m₂v₂ = (m₁+m₂)·v\'', vars: [['v\'','ortak hız (m/s)']], note: 'Cisimler birleşir; maksimum kinetik enerji kaybı olur. ΔEₖ = ½·μ·(v₁−v₂)² [μ = indirgenmiş kütle]' },
  ]
},
{
  id: 'dairesel',
  icon: '🌀',
  title: 'Dairesel Hareket & Gravite',
  subtitle: 'Çembersel hareket ve evrensel çekim',
  levels: ['ayt'],
  formulas: [
    { name: 'Çizgisel & Açısal Hız', eq: 'v = ω·r   |   ω = 2π/T = 2πf', vars: [['ω','açısal hız (rad/s)'],['v','çizgisel hız (m/s)'],['r','yarıçap (m)'],['T','periyot (s)'],['f','frekans (Hz)']], note: 'Aynı katı cisimde ω her noktada eşit, v ise r ile orantılıdır.' },
    { name: 'Merkezcil İvme', eq: 'aₘ = v² / r = ω²·r = 4π²r/T²', vars: [['aₘ','merkezcil ivme (m/s²)'],['r','yarıçap (m)']], note: 'Daima merkeze doğru (santripetal) yönelmiştir. Yönü değişir, büyüklüğü sabittir.' },
    { name: 'Merkezcil Kuvvet', eq: 'Fₘ = m·v²/r = m·ω²·r', vars: [['Fₘ','merkezcil kuvvet (N)'],['m','kütle']], note: 'Bu başlı başına bir kuvvet türü değildir; sürtünme, gerilim, yerçekimi vb. net kuvvetidir.' },
    { name: 'Evrensel Çekim', eq: 'F = G · m₁·m₂ / r²', vars: [['G','6,674×10⁻¹¹ N·m²/kg²'],['r','merkezler arası uzaklık (m)']], note: 'Mesafe 2 katına çıkarsa kuvvet ¼ olur (ters kare yasası).' },
    { name: 'Yüzey Yerçekimi', eq: 'g = G · M / R²', vars: [['M','gezegen kütlesi (kg)'],['R','gezegen yarıçapı (m)']], note: 'Yüzeyden h yükseklikte: gₕ = G·M/(R+h)². h << R ise gₕ ≈ g·(1 − 2h/R)' },
    { name: 'Uydu Orbital Hızı', eq: 'v = √(G·M/r)', vars: [['r','yörünge yarıçapı'],['M','merkez kütle']], note: 'Yörünge yarıçapı arttıkça orbital hız azalır.' },
    { name: 'Kepler 3. Yasası', eq: 'T² = (4π²/(G·M)) · r³   →   T² ∝ r³', vars: [['T','yörünge periyodu (s)'],['r','yörünge yarıçapı (m)']], note: 'Tüm gezegenler için G·M sabittir. T₁²/r₁³ = T₂²/r₂³' },
  ]
},
{
  id: 'basinc',
  icon: '💧',
  title: 'Basınç & Akışkanlar',
  subtitle: 'Statik ve dinamik akışkan mekaniği',
  levels: ['tyt','ayt'],
  formulas: [
    { name: 'Basınç', eq: 'P = F / A', vars: [['P','basınç (Pa)'],['F','kuvvet (N)'],['A','alan (m²)']], note: '1 atm = 101 325 Pa ≈ 10⁵ Pa' },
    { name: 'Sıvı Basıncı', eq: 'P = ρ · g · h', vars: [['ρ','yoğunluk (kg/m³)'],['h','derinlik (m)']], note: 'Aynı derinlikteki tüm noktalarda basınç eşittir.' },
    { name: 'Pascal Yasası', eq: 'F₁/A₁ = F₂/A₂', vars: [], note: 'Hidrolik sistemlerin temelini oluşturur.' },
    { name: 'Arşimet Kuvveti', eq: 'Fₐ = ρ_sıvı · V_batan · g', vars: [['V_batan','sıvıya giren hacim']], note: 'Cisim tamamen batarsa V_batan = V_cisim.' },
    { name: 'Bernoulli', eq: 'P + ½ρv² + ρgh = sabit', vars: [], note: 'İdeal akışkanlar için enerji korunumu ilkesidir.' },
    { name: 'Süreklilik Denklemi', eq: 'A₁·v₁ = A₂·v₂', vars: [['A','kesit alanı'],['v','akış hızı']], note: 'Sıkıştırılamaz akışkanlar için geçerlidir.' },
  ]
},
{
  id: 'sicaklik',
  icon: '🌡️',
  title: 'Isı & Sıcaklık',
  subtitle: 'Termodinamik ve ısı alışverişi',
  levels: ['tyt','ayt'],
  formulas: [
    { name: 'Isı', eq: 'Q = m · c · ΔT', vars: [['Q','ısı (J)'],['m','kütle (kg)'],['c','özısı (J/kg·K)'],['ΔT','sıcaklık farkı']], note: 'Su için c = 4200 J/kg·K' },
    { name: 'Hal Değişimi Isısı', eq: 'Q = m · L', vars: [['L','gizli ısı (J/kg)']], note: 'Erime veya buharlaşmada sıcaklık değişmez.' },
    { name: 'Isı Dengesi', eq: 'Q_verilen = Q_alınan', vars: [], note: 'Kalorimetri problemlerinin temelidir.' },
    { name: 'Genleşme', eq: 'ΔL = α · L₀ · ΔT', vars: [['α','doğrusal genleşme katsayısı'],['L₀','başlangıç uzunluğu']], note: 'Hacim genleşmesi: ΔV = 3α · V₀ · ΔT' },
    { name: 'İdeal Gaz', eq: 'P·V = n·R·T', vars: [['n','mol sayısı'],['R','8,314 J/mol·K'],['T','Kelvin cinsinden']], note: 'T(K) = T(°C) + 273' },
    { name: 'Carnot Verimi', eq: 'η = 1 − T_soğuk / T_sıcak', vars: [['η','verim (0-1)'],['T','Kelvin cinsinden']], note: 'Gerçek motorlar Carnot verimini geçemez.' },
  ]
},
{
  id: 'dalgalar',
  icon: '〰️',
  title: 'Dalgalar & Ses',
  subtitle: 'Mekanik dalgalar, rezonans, Doppler',
  levels: ['tyt','ayt'],
  formulas: [
    { name: 'Dalga Hızı', eq: 'v = λ · f = λ / T', vars: [['v','dalga hızı (m/s)'],['λ','dalga boyu (m)'],['f','frekans (Hz)'],['T','periyot (s)']], note: 'Ortam değişince f sabit kalır, λ değişir. Hız yalnızca ortama bağlıdır.' },
    { name: 'Gerdirili Telde Dalga Hızı', eq: 'v = √(F / μ)   |   μ = m/L', vars: [['F','tel gerilimi (N)'],['μ','birim uzunluk kütlesi (kg/m)'],['L','tel uzunluğu']], note: 'Gerilim arttıkça hız artar. Telin kalınlığı arttıkça μ artar, hız azalır.' },
    { name: 'Telde Duran Dalga (Harmonik)', eq: 'λₙ = 2L/n   |   fₙ = n·v/(2L)', vars: [['n','harmonik sayısı (1,2,3…)'],['L','tel uzunluğu']], note: 'n=1: temel harmonik (1. harmonik). Her iki uç düğüm noktasıdır.' },
    { name: 'Doppler Etkisi', eq: 'f\' = f · (v + vₐ) / (v − v_k)', vars: [['vₐ','alıcı hızı (yaklaşırsa +)'],['v_k','kaynak hızı (yaklaşırsa +)'],['v','sesteki dalga hızı']], note: 'Kaynak ya da alıcı yaklaşırsa frekans artar, uzaklaşırsa azalır.' },
    { name: 'Ses Şiddeti Düzeyi (dB)', eq: 'L = 10 · log(I / I₀)', vars: [['I₀','10⁻¹² W/m² (eşik şiddeti)'],['I','ses şiddeti (W/m²)']], note: '10 dB artış → şiddet 10 kat artar. 20 dB → 100 kat, 30 dB → 1000 kat.' },
    { name: 'Basit Sarkaç Periyodu', eq: 'T = 2π · √(L / g)', vars: [['T','periyot (s)'],['L','ip uzunluğu (m)'],['g','yerçekimi ivmesi']], note: 'Genlikten ve kütleden bağımsızdır. Yalnızca küçük açılar için (< 15°) geçerlidir.' },
    { name: 'Yay-Kütle Sarkacı Periyodu', eq: 'T = 2π · √(m / k)', vars: [['m','asılı kütle (kg)'],['k','yay sabiti (N/m)']], note: 'Genlikten bağımsızdır. k arttıkça (sert yay) periyot azalır.' },
  ]
},
{
  id: 'elektrik',
  icon: '⚡',
  title: 'Elektrik & Manyetizma',
  subtitle: 'Elektrostatik, devreler, elektromanyetizma',
  levels: ['ayt'],
  formulas: [
    { name: 'Coulomb Yasası', eq: 'F = k · |q₁·q₂| / r²', vars: [['k','8,99×10⁹ N·m²/C²'],['q','yük (C)'],['r','yükler arası uzaklık (m)']], note: 'k = 1/(4πε₀). Aynı işaretli yükler iter, zıt işaretliler çeker.' },
    { name: 'Elektrik Alan', eq: 'E = F / q₀ = k·Q / r²', vars: [['E','elektrik alan şiddeti (N/C veya V/m)'],['q₀','test yükü'],['Q','kaynak yük']], note: 'Vektörel büyüklük. Pozitif yükten dışarı, negatife doğru yönelir.' },
    { name: 'Düzgün Elektrik Alan', eq: 'E = V / d   |   F = q·E', vars: [['V','plakalar arası gerilim (V)'],['d','plaka aralığı (m)']], note: 'Paralel plakalarda alan düzgündür. Yük hareketi: W = q·V' },
    { name: 'Elektrik Potansiyel', eq: 'V = k · Q / r   |   W = q·ΔV', vars: [['V','potansiyel (V = J/C)'],['W','yapılan iş (J)']], note: 'Skaler büyüklük. E = −ΔV/Δr (alan, potansiyelin gradyanının negatifi).' },
    { name: 'Kondansatör Kapasitesi', eq: 'C = Q / V = ε₀·A / d', vars: [['C','kapasite (F)'],['A','plaka alanı (m²)'],['d','plaka aralığı (m)']], note: 'Paralel: C = C₁+C₂. Seri: 1/C = 1/C₁+1/C₂. Enerji: U = ½CV² = Q²/2C' },
    { name: 'Ohm Yasası & Direnç', eq: 'V = I·R   |   R = ρ·L/A', vars: [['V','gerilim (V)'],['I','akım (A)'],['R','direnç (Ω)'],['ρ','özdirenç (Ω·m)']], note: 'Seri: R = R₁+R₂. Paralel: 1/R = 1/R₁+1/R₂.' },
    { name: 'Elektrik Gücü & Enerji', eq: 'P = V·I = I²·R = V²/R   |   W = P·t', vars: [['P','güç (W)'],['W','elektrik enerjisi (J)']], note: 'Joule ısınması: Q = I²·R·t. 1 kWh = 3,6×10⁶ J' },
    { name: 'Kirchhoff Akım Yasası (KAY)', eq: 'ΣI_giren = ΣI_çıkan', vars: [], note: 'Düğüm noktasında toplam giren akım = toplam çıkan akım (yük korunumu).' },
    { name: 'Kirchhoff Gerilim Yasası (KGY)', eq: 'ΣV = 0  (kapalı çevrim)', vars: [], note: 'Kapalı çevrimdeki gerilim düşümlerinin toplamı sıfırdır (enerji korunumu).' },
    { name: 'Manyetik Kuvvet (hareketli yük)', eq: 'F = q·v·B·sinθ', vars: [['B','manyetik alan (T = Wb/m²)'],['q','yük (C)'],['v','hız (m/s)'],['θ','v ile B arası açı']], note: 'Lorentz kuvveti. θ = 90° maksimum. Yönü: sağ el kuralı (pozitif yük için).' },
    { name: 'Manyetik Kuvvet (akım taşıyan tel)', eq: 'F = B·I·L·sinθ', vars: [['L','tel uzunluğu (m)'],['I','akım (A)']], note: 'Tel alana paralelse (θ=0°) kuvvet sıfır; dik ise maksimum.' },
    { name: 'Faraday İndüksiyon Yasası', eq: 'ε = −N · ΔΦ/Δt   |   Φ = B·A·cosθ', vars: [['ε','indüklenen emk (V)'],['Φ','manyetik akı (Wb)'],['N','sarım sayısı']], note: 'Lenz yasası: negatif işaret, indüklenen akımın değişime karşı olduğunu gösterir.' },
    { name: 'Transformatör', eq: 'V₁/V₂ = N₁/N₂   |   V₁·I₁ = V₂·I₂', vars: [['N','sarım sayısı'],['V','gerilim'],['I','akım']], note: 'İdeal transformatörde güç korunur: P₁ = P₂. Yükseltici: N₂ > N₁.' },
  ]
},
{
  id: 'optik',
  icon: '🔭',
  title: 'Optik',
  subtitle: 'Geometrik optik, aynalar ve mercekler',
  levels: ['ayt'],
  formulas: [
    { name: 'Snell Yasası', eq: 'n₁ · sin(θ₁) = n₂ · sin(θ₂)', vars: [['n','kırılma indisi'],['θ','açı']], note: 'n = c / v; cam için n ≈ 1,5' },
    { name: 'Ayna/Mercek Formülü', eq: '1/f = 1/d_o + 1/d_i', vars: [['f','odak uzaklığı'],['d_o','cisim mesafesi'],['d_i','görüntü mesafesi']], note: 'f > 0: yakınsak; f < 0: ıraksak' },
    { name: 'Büyütme', eq: 'm = −d_i / d_o = y_i / y_o', vars: [['m','büyütme (boyutsuz)'],['y','boy']], note: '|m| > 1: büyümüş; m < 0: ters görüntü' },
    { name: 'Küresel Ayna Odak', eq: 'f = R / 2', vars: [['R','eğrilik yarıçapı']], note: 'Çukur aynada f > 0, tümsek aynada f < 0.' },
    { name: 'İnce Mercek Gücü', eq: 'P = 1/f (dioptri)', vars: [['P','lens gücü (D)'],['f','odak uzaklığı (m)']], note: 'Birleşik merceklerde: P = P₁ + P₂' },
  ]
},
{
  id: 'modern',
  icon: '⚛️',
  title: 'Modern Fizik',
  subtitle: 'Kuantum, atom ve nükleer fizik',
  levels: ['ayt'],
  formulas: [
    { name: 'Foton Enerjisi (Planck)', eq: 'E = h·f = h·c/λ', vars: [['h','6,626×10⁻³⁴ J·s'],['f','frekans (Hz)'],['c','3×10⁸ m/s'],['λ','dalga boyu (m)']], note: '1 eV = 1,6×10⁻¹⁹ J. Işığın hem dalga hem parçacık özelliği vardır (dalga-parçacık dualitesi).' },
    { name: 'Fotoelektrik Etki', eq: 'E_k = h·f − φ = h·f − h·f₀', vars: [['E_k','sökülen elektronun kinetik enerjisi'],['φ','iş fonksiyonu (J veya eV)'],['f₀','eşik frekansı']], note: 'f < f₀ ise ışık şiddeti ne olursa olsun elektron sökülmez.' },
    { name: 'De Broglie Madde Dalgası', eq: 'λ = h / p = h / (m·v)', vars: [['λ','madde dalgaboyu (m)'],['p','momentum (kg·m/s)']], note: 'Her madde parçacığının bir dalga boyu vardır. Büyük kütlelerde ihmal edilebilir düzeydedir.' },
    { name: 'Bohr Modeli — Enerji', eq: 'Eₙ = −13,6 / n²  (eV)', vars: [['n','baş kuantum sayısı (n=1,2,3…)']], note: 'n=1: temel hal (−13,6 eV). Negatif işaret: bağlı elektron. İyonizasyon enerjisi = 13,6 eV.' },
    { name: 'Bohr Modeli — Yarıçap', eq: 'rₙ = n²·a₀   |   a₀ = 0,053 nm', vars: [['a₀','Bohr yarıçapı = 5,3×10⁻¹¹ m'],['n','kuantum sayısı']], note: 'n arttıkça yörünge yarıçapı n² ile büyür.' },
    { name: 'Spektral Geçiş Enerjisi', eq: 'ΔE = Eₙ₂ − Eₙ₁ = h·f = h·c/λ', vars: [['ΔE','enerji farkı'],['f','yayılan/soğurulan foton frekansı']], note: 'Elektron üst seviyeden alta inerken foton yayar, alttan üste çıkarken soğurur.' },
    { name: 'Radyoaktif Bozunma', eq: 'N(t) = N₀ · (½)^(t/T½)   |   A = λ·N', vars: [['N₀','başlangıç nükleon sayısı'],['T½','yarı ömür (s)'],['A','aktivite (Bq)'],['λ','bozunma sabiti']], note: 'Her T½ sürede aktivite ve atom sayısı yarıya düşer. λ = ln2/T½' },
    { name: 'Kütle-Enerji Denkliği', eq: 'E = Δm · c²', vars: [['Δm','kütle defekti (kg)'],['c','3×10⁸ m/s']], note: '1 u = 931,5 MeV/c². Nükleer reaksiyonlarda Δm bağlanma enerjisini verir.' },
  ]
},
];

let activeLevel = 'all';
let searchTerm = '';
let bookmarks = JSON.parse(localStorage.getItem('phyBookmarks') || '[]');
let quizQueue = [];
let quizIndex = 0;
let answered = false;

function buildSidebar() {
const nav = document.getElementById('sidebar');
let html = '';
const tytTopics = DATA.filter(t => t.levels.includes('tyt'));
const aytOnlyTopics = DATA.filter(t => t.levels.includes('ayt') && !t.levels.includes('tyt'));
html += `<div class="sidebar-section">
  <div class="sidebar-title">Genel</div>
  <div class="nav-item active" onclick="scrollToAll(this)" id="navAll">
    <span class="nav-icon">📚</span> Tüm Konular
    <span class="nav-badge">${DATA.reduce((s,t)=>s+t.formulas.length,0)}</span>
  </div>
  <div class="nav-item" onclick="scrollToBookmarks(this)">
    <span class="nav-icon">⭐</span> Kaydedilenler
    <span class="nav-badge" id="navBmCount">${bookmarks.length}</span>
  </div>
</div>`;
html += `<div class="sidebar-section"><div class="sidebar-title">TYT Konuları</div>`;
tytTopics.forEach(t => {
  html += `<div class="nav-item nav-tyt" onclick="scrollToTopic('${t.id}',this)">
    <span class="nav-icon">${t.icon}</span> ${t.title.split('—')[0].trim()}
    <span class="nav-badge">${t.formulas.length}</span>
  </div>`;
});
html += `</div><div class="sidebar-section"><div class="sidebar-title">Sadece AYT</div>`;
aytOnlyTopics.forEach(t => {
  html += `<div class="nav-item nav-ayt" onclick="scrollToTopic('${t.id}',this)">
    <span class="nav-icon">${t.icon}</span> ${t.title.split('—')[0].trim()}
    <span class="nav-badge">${t.formulas.length}</span>
  </div>`;
});
html += `</div>`;
nav.innerHTML = html;
}

function buildContent() {
const main = document.getElementById('mainContent');
let filtered = DATA.filter(topic => {
  if (activeLevel !== 'all' && !topic.levels.includes(activeLevel)) return false;
  if (searchTerm) {
    const s = searchTerm.toLowerCase();
    return topic.title.toLowerCase().includes(s) ||
      topic.formulas.some(f => f.name.toLowerCase().includes(s) || f.eq.toLowerCase().includes(s) ||
        f.vars.some(v => v[0].toLowerCase().includes(s)));
  }
  return true;
});

let total = DATA.reduce((s,t)=>s+t.formulas.length,0);
let topicCount = DATA.length;
document.getElementById('totalCount').textContent = total;
document.getElementById('topicCount').textContent = topicCount;
document.getElementById('bookmarkCount').textContent = bookmarks.length;
document.getElementById('navBmCount').textContent = bookmarks.length;

if (filtered.length === 0) {
  main.innerHTML = `<div class="empty-state visible"><h3>Sonuç bulunamadı 🔍</h3><p>"${searchTerm}" için formül bulunamadı.</p></div>`;
  return;
}

let allQuizFormulas = DATA.flatMap(t => t.formulas.map(f => ({...f, topic: t.title})));
let html = `
<div class="progress-section">
  <div class="progress-title">Kaydedilen formüller — ${bookmarks.length} / ${total}</div>
  <div class="progress-bar-outer"><div class="progress-bar-inner" style="width:${total>0?(bookmarks.length/total*100):0}%"></div></div>
</div>
<div class="quiz-banner">
  <span class="quiz-icon">🎯</span>
  <div class="quiz-text">
    <h3>Formülleri Test Et</h3>
    <p>Karışık quiz ile kendini sına — hangisini biliyorsun?</p>
  </div>
  <button class="quiz-btn" onclick="startQuiz()">Quiz Başlat</button>
</div>`;

filtered.forEach(topic => {
  let formulas = topic.formulas;
  if (searchTerm) {
    const s = searchTerm.toLowerCase();
    formulas = formulas.filter(f =>
      f.name.toLowerCase().includes(s) || f.eq.toLowerCase().includes(s) ||
      f.vars.some(v => v[0].toLowerCase().includes(s))
    );
  }
  if (formulas.length === 0) return;
  html += `<div class="topic-section" id="section-${topic.id}">
    <div class="topic-header">
      <span class="topic-icon">${topic.icon}</span>
      <div class="topic-title-group">
        <h2>${topic.title}</h2>
        <p>${topic.subtitle}</p>
      </div>
      <div class="topic-level">
        ${topic.levels.includes('tyt') ? '<span class="level-pill tyt">TYT</span>' : ''}
        ${topic.levels.includes('ayt') ? '<span class="level-pill ayt">AYT</span>' : ''}
      </div>
    </div>
    <div class="formula-grid">`;
  formulas.forEach((f, fi) => {
    const fid = `${topic.id}-${fi}`;
    const bm = bookmarks.includes(fid);
    html += `<div class="formula-card${bm?' bookmarked':''}" id="card-${fid}">
      <div class="formula-name">
        ${f.name}
        <button class="bm-btn${bm?' active':''}" onclick="toggleBM(event,'${fid}')" title="Kaydet">⭐</button>
      </div>
      <div class="formula-eq">${f.eq}</div>`;
    if (f.vars.length > 0) {
      html += `<div class="formula-vars">`;
      f.vars.forEach(v => {
        html += `<span class="var-tag">${v[0]}<span> = ${v[1]}</span></span>`;
      });
      html += `</div>`;
    }
    if (f.note) {
      html += `<button class="expand-btn" onclick="toggleExpand(this,'card-${fid}')">ℹ️ Açıklama</button>
      <div class="formula-note">${f.note}</div>`;
    }
    html += `</div>`;
  });
  html += `</div></div>`;
});

main.innerHTML = html;
}

function toggleBM(e, fid) {
e.stopPropagation();
const btn = e.currentTarget;
const card = document.getElementById('card-'+fid);
if (bookmarks.includes(fid)) {
  bookmarks = bookmarks.filter(b => b !== fid);
  btn.classList.remove('active');
  card.classList.remove('bookmarked');
} else {
  bookmarks.push(fid);
  btn.classList.add('active');
  card.classList.add('bookmarked');
}
localStorage.setItem('phyBookmarks', JSON.stringify(bookmarks));
document.getElementById('bookmarkCount').textContent = bookmarks.length;
document.getElementById('navBmCount').textContent = bookmarks.length;
document.querySelector('.progress-bar-inner').style.width = (bookmarks.length/DATA.reduce((s,t)=>s+t.formulas.length,0)*100)+'%';
}

function toggleExpand(btn, cardId) {
const card = document.getElementById(cardId);
card.classList.toggle('expanded');
btn.textContent = card.classList.contains('expanded') ? '▲ Gizle' : 'ℹ️ Açıklama';
}

function filterLevel(level, btn) {
activeLevel = level;
document.querySelectorAll('.badge-filter').forEach(b => b.classList.remove('active'));
btn.classList.add('active');
buildContent();
}

function scrollToTopic(id, navEl) {
document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
if (navEl) navEl.classList.add('active');
buildContent();
setTimeout(() => {
  const el = document.getElementById('section-'+id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}, 50);
}

function scrollToAll(navEl) {
document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
if (navEl) navEl.classList.add('active');
activeLevel = 'all';
document.querySelectorAll('.badge-filter').forEach(b => b.classList.remove('active'));
document.querySelector('.badge-filter.all').classList.add('active');
buildContent();
window.scrollTo({top:0, behavior:'smooth'});
}

function scrollToBookmarks() {
// highlight bookmarked
document.querySelectorAll('.formula-card').forEach(c => {
  if (!c.classList.contains('bookmarked')) c.style.opacity = '0.3';
  else c.style.opacity = '1';
});
setTimeout(() => {
  document.querySelectorAll('.formula-card').forEach(c => c.style.opacity = '');
}, 2000);
const first = document.querySelector('.formula-card.bookmarked');
if (first) first.scrollIntoView({behavior:'smooth', block:'center'});
}

// QUIZ
function startQuiz() {
const all = DATA.flatMap((t,ti) => t.formulas.map((f,fi) => ({
  ...f, topicTitle: t.title, fid: `${t.id}-${fi}`
})));
quizQueue = all.sort(() => Math.random()-0.5).slice(0, 10);
quizIndex = 0;
showQuiz();
document.getElementById('quizModal').classList.add('open');
}

function showQuiz() {
answered = false;
const q = quizQueue[quizIndex];
document.getElementById('quizQ').textContent = `Soru ${quizIndex+1} / ${quizQueue.length} — "${q.name}" formülü hangisi?`;
document.getElementById('quizFormula').textContent = q.name + ' — ' + q.topicTitle;
document.getElementById('quizResult').className = 'quiz-result';
document.getElementById('nextBtn').className = 'modal-btn next';
document.getElementById('exitBtn').className = 'modal-btn exit show';

// Pick 3 wrong answers
const allFormulas = DATA.flatMap(t => t.formulas.map(f => f.eq));
let wrongs = allFormulas.filter(eq => eq !== q.eq).sort(() => Math.random()-0.5).slice(0,3);
let options = [...wrongs, q.eq].sort(() => Math.random()-0.5);
let optHTML = '';
options.forEach((opt, idx) => {
  optHTML += `<button class="quiz-option" data-opt="${idx}" onclick="checkAnswerByIdx(this,${idx})">
    ${opt}
  </button>`;
});
document.getElementById('quizOptions').innerHTML = optHTML;
// store options on window for retrieval
window._quizOptions = options;
window._quizCorrect = q.eq;
}

function checkAnswerByIdx(btn, idx) {
const chosen = window._quizOptions[idx];
const correct = window._quizCorrect;
checkAnswer(btn, chosen, correct);
}

function checkAnswer(btn, chosen, correct) {
if (answered) return;
answered = true;
const opts = document.querySelectorAll('.quiz-option');
opts.forEach((o, i) => {
  if (window._quizOptions[i] === correct) o.classList.add('correct');
});
if (chosen !== correct) btn.classList.add('wrong');
const result = document.getElementById('quizResult');
result.textContent = chosen === correct ? '✅ Doğru! Harika!' : `❌ Yanlış. Doğru cevap: ${correct}`;
result.className = 'quiz-result show';
document.getElementById('nextBtn').className = 'modal-btn next show';
}

function nextQuiz() {
quizIndex++;
if (quizIndex >= quizQueue.length) {
  closeQuiz();
  return;
}
showQuiz();
}

function closeQuiz() {
document.getElementById('quizModal').classList.remove('open');
}

// SEARCH
document.getElementById('searchInput').addEventListener('input', function() {
searchTerm = this.value.trim();
buildContent();
});

// MOBİL: arama kutusuna focus'ta logo ve welcome gizle
const searchInput = document.getElementById('searchInput');
const headerEl = document.querySelector('header');
const isMobile = () => window.innerWidth <= 768;

searchInput.addEventListener('focus', function() {
if (isMobile()) {
  headerEl.classList.add('search-active');
  this.closest('.search-bar').classList.add('expanded');
}
});
searchInput.addEventListener('blur', function() {
if (isMobile()) {
  headerEl.classList.remove('search-active');
  this.closest('.search-bar').classList.remove('expanded');
}
});

buildSidebar();
buildContent();

// HOŞ GELDİNİZ — JS typewriter, cursor yok, sadece bir kez
(function() {
const el = document.getElementById('welcomeType');
const text = 'Hoş Geldiniz';
let i = 0;
function type() {
  if (i <= text.length) {
    el.textContent = text.slice(0, i);
    i++;
    setTimeout(type, 75);
  }
}
setTimeout(type, 500);
})();
