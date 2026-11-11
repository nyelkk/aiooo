// --- 1. BANCO DE DADOS (Mock) ---
            const tccsDB = [
                {
                    id: 1,
                    title: "Entre Evas e Humanos: Uma abordagem da relação homem - Máquina através da animação japonesa Neon Genesis Evangelion",
                    author: "Danielly Amatte Lopes",
                    shortDescription: "Em um breve exame sobre as produções contemporâneas a cerca dos mais diversos assuntos, notadamente identificamos a dimensão do papel da imagem nesse final de século XX. Identificada por diversos...",
                    abstract: "Em um breve exame sobre as produções contemporâneas a cerca dos mais diversos assuntos, notadamente identificamos a dimensão do papel da imagem nesse final de século XX. Identificada por diversos estudiosos como uma sociedade que construiu boa parte de seu universo simbólico através das informações fornecidas pelos meios de cultura de massa, sobretudo aqueles que lhe apresentam visualidades como dado, a sociedade ocidental contemporânea passa por um processo onde a imagem ganha uma importância cabal na sua maneira de interpretar e organizar conceitos e dogmas.[...]",
                    rating: 5,
                    coverImage: "capas/entre-evas.png",
                    tags: ["Gráfico", "Mais lidos", "Contém Audiodescrição"],
                    keywords: "Animação, Evangelion, Homem-Máquina, Semiótica",
                    pages: "124",
                    year: "2023",
                    language: "Português",
                    uri: "http://hdl.handle.net/123456789/12345",
                    advisor: "Prof. Dr. Shinji Ikari",
                    isTopRated: true,
                    isRecent: true
                },
                {
                    id: 2,
                    title: "O Design Centrado no Usuário na Criação de Interfaces para Jogos de RPG Mobile",
                    author: "Lucas Albuquerque Mendes",
                    shortDescription: "Este trabalho analisa as metodologias de design centrado no usuário aplicadas na interface de jogos mobile de RPG, buscando entender as melhores práticas para retenção.",
                    abstract: "Este trabalho analisa as metodologias de design centrado no usuário aplicadas na interface de jogos mobile de RPG, buscando entender as melhores práticas para retenção e usabilidade. Através de testes com usuários e heurísticas de Nielsen, avaliamos três jogos de sucesso atual no mercado para propor um framework de desenvolvimento de UI/UX focado no jogador casual mobile.",
                    rating: 4,
                    coverImage: "https://placehold.co/400x600/7300e6/ffffff?text=RPG+Mobile",
                    tags: ["Digital", "UX/UI"],
                    keywords: "UX, UI, Games, Mobile, RPG",
                    pages: "89",
                    year: "2024",
                    language: "Português",
                    uri: "http://hdl.handle.net/123456789/54321",
                    advisor: "Profa. Dra. Marina Silva",
                    isTopRated: true,
                    isRecent: true
                },
                {
                    id: 3,
                    title: "A Tipografia como Elemento Narrativo no Cinema Noir dos Anos 40",
                    author: "Beatriz Oliveira Santos",
                    shortDescription: "Uma imersão visual nos pôsteres e créditos de abertura dos clássicos filmes noir, destrinchando como as escolhas tipográficas moldavam a percepção do espectador.",
                    abstract: "Uma imersão visual nos pôsteres e créditos de abertura dos clássicos filmes noir, destrinchando como as escolhas tipográficas moldavam a percepção do espectador. O trabalho cataloga mais de 50 obras e categoriza as famílias tipográficas mais utilizadas, correlacionando suas características morfológicas com as temáticas de suspense e fatalismo inerentes ao gênero.",
                    rating: 5,
                    coverImage: "https://placehold.co/400x600/333333/ffffff?text=Noir+Type",
                    tags: ["Gráfico", "História"],
                    keywords: "Tipografia, Cinema Noir, Design Gráfico, História do Design",
                    pages: "156",
                    year: "2022",
                    language: "Português",
                    uri: "http://hdl.handle.net/123456789/98765",
                    advisor: "Prof. Dr. Roberto Fontes",
                    isTopRated: true,
                    isRecent: false
                },
                {
                    id: 4,
                    title: "Sustentabilidade no Design de Embalagens: Um estudo de caso da Indústria Cosmética",
                    author: "Camila Ferreira Gomes",
                    shortDescription: "Análise dos materiais e processos ecológicos adotados pelas novas marcas de cosméticos veganos no Brasil e seu impacto no custo e percepção de valor.",
                    abstract: "Análise dos materiais e processos ecológicos adotados pelas novas marcas de cosméticos veganos no Brasil e seu impacto no custo e percepção de valor. O estudo demonstra que embalagens sustentáveis deixaram de ser um nicho para se tornar um requisito de mercado, influenciando diretamente a decisão de compra do consumidor da Geração Z.",
                    rating: 4,
                    coverImage: "https://placehold.co/400x600/4ade80/1e1e1e?text=Eco+Pack",
                    tags: ["Produto", "Sustentabilidade"],
                    keywords: "Embalagem, Sustentabilidade, Cosméticos, Eco-design",
                    pages: "112",
                    year: "2023",
                    language: "Português",
                    uri: "http://hdl.handle.net/123456789/11223",
                    advisor: "Prof. Me. Carlos Eduardo",
                    isTopRated: true,
                    isRecent: true
                },
                {
                    id: 5,
                    title: "A Estética Cyberpunk e o Design de Moda Contemporâneo",
                    author: "João Pedro Alves",
                    shortDescription: "Como a literatura e o cinema cyberpunk dos anos 80 influenciam o design de vestuário e acessórios na atualidade.",
                    abstract: "Como a literatura e o cinema cyberpunk dos anos 80 influenciam o design de vestuário e acessórios na atualidade. Techwear, tecidos inteligentes e a estética da 'alta tecnologia e baixa qualidade de vida' são explorados através de coleções recentes de designers asiáticos e europeus, mapeando a transição da ficção para as passarelas.",
                    rating: 5,
                    coverImage: "https://placehold.co/400x600/ff00ff/000000?text=Cyber+Moda",
                    tags: ["Moda", "Tendências"],
                    keywords: "Cyberpunk, Moda, Techwear, Futurismo",
                    pages: "95",
                    year: "2024",
                    language: "Português",
                    uri: "http://hdl.handle.net/123456789/44556",
                    advisor: "Profa. Dra. Helena Costa",
                    isTopRated: false,
                    isRecent: true
                },
                {
                    id: 6,
                    title: "Ergonomia Cognitiva em Painéis de Veículos Elétricos",
                    author: "Rafael Souza Pinto",
                    shortDescription: "Estudo sobre o design de painéis informativos automotivos, visando reduzir a carga cognitiva do motorista.",
                    abstract: "Estudo sobre o design de painéis informativos automotivos, visando reduzir a carga cognitiva do motorista. Com o advento das grandes telas touchscreens em veículos como os da Tesla, a interação humano-máquina no ambiente veicular precisa ser repensada para evitar distrações fatais, priorizando feedbacks hápticos e sonoros complementares.",
                    rating: 4,
                    coverImage: "https://placehold.co/400x600/0000ff/ffffff?text=Ergo+Car",
                    tags: ["Produto", "Ergonomia"],
                    keywords: "Ergonomia Cognitiva, Automotivo, Interface, HMI",
                    pages: "130",
                    year: "2021",
                    language: "Português",
                    uri: "http://hdl.handle.net/123456789/77889",
                    advisor: "Prof. Dr. Antônio Carlos",
                    isTopRated: false,
                    isRecent: false
                }
            ];

            // --- 2. CONTROLE DE SCROLL (HERO -> HEADER) ---
            window.addEventListener('scroll', () => {
                const header = document.getElementById('main-header');
                if (window.scrollY > 80) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // --- 3. RENDERIZAÇÃO DE CARDS ---
            function getStarsHTML(rating) {
                let stars = '';
                for(let i=1; i<=5; i++) {
                    if(i <= rating) {
                        stars += '<i class="fas fa-star"></i>';
                    } else {
                        stars += '<i class="far fa-star"></i>';
                    }
                }
                return stars;
            }

            function getTagsHTML(tags) {
                return tags.map(tag => {
                    let colorClass = "bg-gray-100 text-gray-700 border border-gray-200"; // default
                    
                    // Mapeamento de cores baseado na imagem de referência
                    if(tag.toLowerCase() === 'gráfico') colorClass = "bg-purple-100 text-primary border border-primary";
                    else if(tag.toLowerCase() === 'mais lidos') colorClass = "bg-orange-100 text-orange-600 border border-orange-400";
                    else if(tag.toLowerCase() === 'contém audiodescrição') colorClass = "bg-green-100 text-green-700 border border-green-500";
                    
                    // Return tag HTML, using custom icons if specific tags match
                    let icon = "";
                    if(tag.toLowerCase() === 'gráfico') icon = '<i class="fas fa-pen-nib mr-1"></i>';
                    else if(tag.toLowerCase() === 'mais lidos') icon = '<i class="fas fa-eye mr-1"></i>';
                    else if(tag.toLowerCase() === 'contém audiodescrição') icon = '<i class="fas fa-volume-up mr-1"></i>';
                    
                    return `<span class="text-xs font-semibold px-2 py-1 rounded-md flex items-center ${colorClass}">${icon} ${tag}</span>`;
                }).join('');
            }

            function createCardHTML(tcc) {
                return `
                    <a href="#tcc-${tcc.id}" class="tcc-card bg-gray-50 rounded-xl overflow-hidden shadow border border-gray-200 cursor-pointer flex h-full">
                        <!-- Image Area -->
                        <div class="w-[44%] flex-shrink-0 bg-gray-50 p-2 sm:w-[42%] sm:p-3 lg:w-[40%]">
                            <img src="${tcc.coverImage}" alt="Capa" class="tcc-cover w-full rounded-md">
                        </div>
                        <!-- Content Area -->
                        <div class="min-w-0 w-[56%] self-start p-2 flex flex-col sm:w-[58%] sm:p-3 lg:w-[60%] lg:p-3">
                            <h3 class="font-bold text-gray-900 text-[13px] sm:text-base lg:text-lg leading-tight mb-1 line-clamp-2">${tcc.title}</h3>
                            
                            <div class="text-primary text-xs mb-1">
                                ${getStarsHTML(tcc.rating)}
                            </div>
                            
                            <p class="text-gray-500 text-[11px] sm:text-xs mb-1 italic">${tcc.author}</p>
                            
                            <p class="text-gray-600 text-[11px] sm:text-xs mb-1 sm:mb-2 line-clamp-2 text-justify">
                                ${tcc.shortDescription}
                            </p>
                            
                            <div class="tcc-card-tags flex flex-wrap gap-1">
                                ${getTagsHTML(tcc.tags)}
                            </div>
                        </div>
                    </a>
                `;
            }

            // --- 4. LÓGICA DE NAVEGAÇÃO E VIEWS ---
            function hideAllViews() {
                document.querySelectorAll('.view-section').forEach(el => {
                    el.classList.remove('active');
                });
            }

            function goHome() {
                hideAllViews();
                document.getElementById('view-home').classList.add('active');
                document.getElementById('searchInput').value = '';
                document.getElementById('top-spacer').classList.remove('compact');
                window.scrollTo(0, 0);
                
                const header = document.getElementById('main-header');
                header.classList.remove('force-scrolled');
                
                // Force header to hero mode if at top
                if(window.scrollY <= 80) {
                    header.classList.remove('scrolled');
                } else {
                    header.classList.add('scrolled');
                }

                if (/^#tcc-\d+$/.test(window.location.hash)) {
                    window.location.hash = '';
                }
            }

            function executeSearch() {
                const query = document.getElementById('searchInput').value.toLowerCase().trim();
                if (!query) return; // Ignore empty search

                hideAllViews();
                const viewSearch = document.getElementById('view-search');
                viewSearch.classList.add('active');
                document.getElementById('top-spacer').classList.add('compact');
                
                document.getElementById('main-header').classList.add('force-scrolled');
                
                document.getElementById('search-title').innerText = `Resultados de Pesquisa para: "${query}"`;
                
                // Ensure header is scrolled up
                window.scrollTo(0, 0);

                // Filter data
                const results = tccsDB.filter(tcc => 
                    tcc.title.toLowerCase().includes(query) || 
                    tcc.author.toLowerCase().includes(query)
                );

                const grid = document.getElementById('search-results-grid');
                const errorBlock = document.getElementById('search-404');
                const suggGrid = document.getElementById('search-suggestions-grid');

                if (results.length > 0) {
                    grid.style.display = 'grid';
                    errorBlock.style.display = 'none';
                    grid.innerHTML = results.map(createCardHTML).join('');
                } else {
                    grid.style.display = 'none';
                    errorBlock.style.display = 'flex';
                    // Show top 4 as suggestions
                    const topRated = tccsDB.filter(tcc => tcc.isTopRated).slice(0, 4);
                    suggGrid.innerHTML = topRated.map(createCardHTML).join('');
                }
            }

            function handleSearch(event) {
                if (event.key === "Enter") {
                    executeSearch();
                }
            }

            function showDetail(id, updateUrl = true) {
                const tcc = tccsDB.find(item => item.id === id);
                if(!tcc) return false;

                if (updateUrl && window.location.hash !== `#tcc-${id}`) {
                    window.location.hash = `tcc-${id}`;
                }

                hideAllViews();
                document.getElementById('view-detail').classList.add('active');
                document.getElementById('top-spacer').classList.add('compact');
                
                document.getElementById('main-header').classList.add('force-scrolled');
                
                window.scrollTo(0, 0);

                // Populate Data
                document.getElementById('detail-image').src = tcc.coverImage;
                document.getElementById('detail-title').innerText = tcc.title;
                document.getElementById('detail-author').innerText = tcc.author;
                document.getElementById('detail-abstract').innerText = tcc.abstract;
                document.getElementById('detail-rating').innerHTML = getStarsHTML(tcc.rating);
                document.getElementById('detail-tags').innerHTML = getTagsHTML(tcc.tags);
                
                // Metadata
                document.getElementById('detail-meta-keywords').innerText = tcc.keywords;
                document.getElementById('detail-meta-pages').innerText = tcc.pages;
                document.getElementById('detail-meta-year').innerText = tcc.year;
                document.getElementById('detail-meta-language').innerText = tcc.language;
                document.getElementById('detail-meta-advisor').innerText = tcc.advisor;
                
                const uriEl = document.getElementById('detail-meta-uri');
                uriEl.innerText = tcc.uri;
                uriEl.href = tcc.uri;
                return true;
            }

            function handleUrlChange(event) {
                const match = window.location.hash.match(/^#tcc-(\d+)$/);
                if (match) {
                    if (!showDetail(Number(match[1]), false)) {
                        window.location.hash = '';
                    }
                    return;
                }

                if (event && /^#tcc-\d+$/.test(new URL(event.oldURL).hash)) {
                    goHome();
                }
            }

            function setupEventListeners() {
                document.getElementById('header-logo').addEventListener('click', goHome);
                document.getElementById('searchInput').addEventListener('keydown', handleSearch);
                document.getElementById('search-button').addEventListener('click', executeSearch);
                document.getElementById('back-home-button').addEventListener('click', goHome);
                document.getElementById('theme-toggle').addEventListener('click', () => {
                    setDarkMode(!document.body.classList.contains('dark-mode'));
                });
                document.getElementById('back-to-top-button').addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }

            function setDarkMode(enabled, persist = true) {
                const button = document.getElementById('theme-toggle');
                const icon = document.getElementById('theme-toggle-icon');
                const label = document.getElementById('theme-toggle-label');

                document.body.classList.toggle('dark-mode', enabled);
                button.setAttribute('aria-pressed', String(enabled));
                button.setAttribute('aria-label', enabled ? 'Ativar modo claro' : 'Ativar modo escuro');
                icon.className = enabled ? 'fas fa-sun' : 'fas fa-moon';
                label.textContent = enabled ? 'Modo claro' : 'Modo escuro';

                if (persist) {
                    try {
                        localStorage.setItem('aio-theme', enabled ? 'dark' : 'light');
                    } catch (error) {
                        console.error('Não foi possível salvar a preferência de tema:', error);
                    }
                }
            }

            function initializeTheme() {
                let darkModeEnabled = false;
                try {
                    darkModeEnabled = localStorage.getItem('aio-theme') === 'dark';
                } catch (error) {
                    console.error('Não foi possível carregar a preferência de tema:', error);
                }

                setDarkMode(darkModeEnabled, false);
            }

            function startIntro() {
                const overlay = document.getElementById('intro-overlay');
                const video = document.getElementById('intro-video');
                const skipButton = document.getElementById('skip-intro');
                let finished = false;

                function finishIntro() {
                    if (finished) return;
                    finished = true;
                    video.pause();
                    overlay.classList.add('is-hidden');
                    overlay.setAttribute('aria-hidden', 'true');
                }

                skipButton.addEventListener('click', finishIntro);
                video.addEventListener('ended', finishIntro, { once: true });
                video.addEventListener('error', () => {
                    console.error('Não foi possível carregar o vídeo de abertura.');
                    finishIntro();
                }, { once: true });

                video.play().catch(error => {
                    if (error.name !== 'AbortError') {
                        console.error('Não foi possível reproduzir o vídeo de abertura:', error);
                    }
                    finishIntro();
                });
            }

            // --- 5. INICIALIZAÇÃO ---
            function initApp() {
                initializeTheme();
                setupEventListeners();

                // Preencher Home: Top Rated
                const topRated = tccsDB.filter(tcc => tcc.isTopRated).slice(0, 4);
                document.getElementById('grid-top-rated').innerHTML = topRated.map(createCardHTML).join('');

                // Preencher Home: Recentes
                const recents = tccsDB.filter(tcc => tcc.isRecent).slice(0, 4);
                document.getElementById('grid-recent').innerHTML = recents.map(createCardHTML).join('');

                handleUrlChange();
                startIntro();
            }

            // Run on load
            window.addEventListener('DOMContentLoaded', initApp);
            window.addEventListener('hashchange', handleUrlChange);
