import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const facts = [
    {
      title: "Миф о «грустной рыбе»",
      description: "На глубине рыба-капля выглядит совершенно нормально. Её желеобразный вид появляется только после подъёма на поверхность из-за резкого перепада давления.",
      icon: "AlertCircle"
    },
    {
      title: "Рекордная глубина обитания",
      description: "Psychrolutes marcidus живёт на глубине 600-1200 метров у берегов Австралии и Тасмании, где давление в 60-120 раз выше атмосферного.",
      icon: "Anchor"
    },
    {
      title: "Энергосберегающий образ жизни",
      description: "У рыбы-капли почти нет мышц. Она дрейфует над дном, открывая рот и заглатывая мелкую добычу, что позволяет экономить энергию в условиях глубины.",
      icon: "Zap"
    },
    {
      title: "Икрометание и защита потомства",
      description: "Самки откладывают тысячи икринок на морское дно и охраняют их до момента вылупления, что редко встречается среди глубоководных рыб.",
      icon: "Heart"
    }
  ];

  const cultureFacts = [
    {
      title: "Символ Общества сохранения уродливых животных",
      description: "В 2013 году рыба-капля стала официальным талисманом Ugly Animal Preservation Society, привлекая внимание к проблеме вымирания непривлекательных видов.",
      year: "2013"
    },
    {
      title: "Интернет-мем и массовая культура",
      description: "Изображение рыбы-капли стало вирусным мемом, появляясь в мерчандайзе, стикерах и игрушках по всему миру.",
      year: "2010-е"
    },
    {
      title: "Угроза траловым ловом",
      description: "Рыба-капля случайно попадает в тралы для промысла крабов и омаров, что ставит вид под угрозу исчезновения.",
      year: "Настоящее"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/b7016b99-cbe0-4274-88df-77a7469d3d37/files/a63a5ca4-f032-4f30-89bd-9ee620eb85d5.jpg" 
            alt="Blobfish in deep ocean"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
          <Badge className="mb-6 text-sm font-sans px-4 py-2">
            Psychrolutes marcidus
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Рыба-капля
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Самое непонятное глубоководное существо, ставшее иконой интернет-культуры
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </header>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Необычные факты
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Научные данные о Psychrolutes marcidus, которые развенчивают мифы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {facts.map((fact, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Icon name={fact.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">
                        {fact.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {fact.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Популярная культура
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Как глубоководная рыба стала символом интернета
            </p>
          </div>

          <div className="space-y-8">
            {cultureFacts.map((item, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <Badge variant="outline" className="text-base px-4 py-2 w-fit">
                      {item.year}
                    </Badge>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card border border-border rounded-2xl p-12">
            <Icon name="BookOpen" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Научная классификация
            </h2>
            <div className="space-y-3 text-lg text-muted-foreground">
              <p><span className="text-foreground font-semibold">Царство:</span> Animalia</p>
              <p><span className="text-foreground font-semibold">Тип:</span> Chordata</p>
              <p><span className="text-foreground font-semibold">Класс:</span> Actinopterygii</p>
              <p><span className="text-foreground font-semibold">Отряд:</span> Scorpaeniformes</p>
              <p><span className="text-foreground font-semibold">Семейство:</span> Psychrolutidae</p>
              <p><span className="text-foreground font-semibold">Род:</span> Psychrolutes</p>
              <p><span className="text-foreground font-semibold">Вид:</span> P. marcidus</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="text-sm">
            Научно-популярный ресурс о рыбе-капле (Psychrolutes marcidus)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
