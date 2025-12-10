import * as React from "react"

// Define a largura máxima (breakpoint) em pixels para considerar como dispositivo móvel
const MOBILE_BREAKPOINT = 768

// Exporta o hook customizado useIsMobile para ser usado em outros componentes
export function useIsMobile() {
  // Cria um estado para armazenar se é mobile, começando como undefined para evitar hidratação incorreta
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  // Efeito colateral para monitorar o tamanho da tela
  React.useEffect(() => {
    // Cria um objeto MediaQueryList para monitorar se a tela é menor que o breakpoint
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Função callback que atualiza o estado quando a largura da tela muda
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Adiciona um ouvinte de evento para reagir a mudanças no tamanho da tela
    mql.addEventListener("change", onChange)
    
    // Define o valor inicial do estado verificando a largura atual da janela
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Função de limpeza: remove o ouvinte quando o componente é desmontado
    return () => mql.removeEventListener("change", onChange)
  }, []) // O array vazio garante que o efeito execute apenas uma vez na montagem

  // Retorna true se for mobile, false caso contrário (a negação dupla !! garante um booleano)
  return !!isMobile
}
