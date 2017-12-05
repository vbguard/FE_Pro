// 2)Создать регулярку и заменить значения  11-аа в тексте  на ***

// Lorem ipsum dolor11-аа  sit amet, consectetur adipisicing elit. 
// Cumque architecto rem dolorum similique doloribus ea quo commodi, 
// dignissimos dolores repellendus iure laudantium pariatur natus unde 
// harum a sed perferendis accusamus. Debitis 11-аа odio officia possimus 
// exercitationem 11-аа repellendus, neque itaque asperiores quos enim 
// eveniet nihil iure a totam amet odit incidunt temporibus fugiat facere, 
// obcaecati quo, modi cupiditate deleniti repudiandae quam ad. Earum minus 
// voluptatem officia 11-аа esse sed aperiam iure necessitatibus tempora 
// 11-аа suscipit architecto obcaecati temporibus numquam atque, ad libero 
// 11-аа accusantium ea reiciendis harum eum vero dolorem nobis, reprehenderit 
// sapiente fugiat autem. Nostrum sed esse accusantium minus at magnam reiciendis 
// inventore magni.

var text = "Lorem ipsum dolor11-аа  sit amet, consectetur adipisicing elit. Cumque architecto rem dolorum similique doloribus ea quo commodi, dignissimos dolores repellendus iure laudantium pariatur natus unde harum a sed perferendis accusamus. Debitis 11-аа odio officia possimus exercitationem 11-аа repellendus, neque itaque asperiores quos enim eveniet nihil iure a totam amet odit incidunt temporibus fugiat facere, obcaecati quo, modi cupiditate deleniti repudiandae quam ad. Earum minus voluptatem officia 11-аа esse sed aperiam iure necessitatibus tempora 11-аа suscipit architecto obcaecati temporibus numquam atque, ad libero 11-аа accusantium ea reiciendis harum eum vero dolorem nobis, reprehenderit sapiente fugiat autem. Nostrum sed esse accusantium minus at magnam reiciendis inventore magni.";

var pattern = /\d\d\D\D\D/g; // g - глобальный поиск - все вхождения, а не только первое.
var result = text.replace(pattern, "***");
document.write(result);

// як вивести текст через ID щось не вийшло... var text = document.getElementById(); - це використовувати?