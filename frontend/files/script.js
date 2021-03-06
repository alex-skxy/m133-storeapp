class Product {
    constructor(id, name, description, basePrice, salePrice, image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.basePrice = basePrice;
        this.salePrice = salePrice;
        this.image = image;
    }
}

class ShoppingCart {
    constructor(products, total) {
        this.products = products;
        this.total = total;
    }
}

// TODO: remove test data
const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAOPElEQVR4nO2db4gUZRzH593q4h/yjsvzMO8EXxgFQfbKwGQN4cK6IuRQLPRFEIgvUog4EMNAEHyTIdHFhe8SRJLEoBf980Wpc2BlcmVExO6eC5rcoXckt/Ptxe7MzszO7s7szp/nz/cDW7c7szPP/J7fZ5955nlmNEzTRKlURKlUavsq1l+lUrH2/2Lt5XxetNctOuuX3J/713dtt+Tebsm7TtG/rWJzuYI+K7rK4v1e0ft50P9dZWnaRjG4jKW25WgsL5ZaxzLw2Npsv+TaTtCyoLI2x7319zouaxm/dt9trufgfGi/b3/eBB2jHRd//hT967SIsTltwijW/wAs+LHQ+NhyfWYFro0Wn1oBf1tt/xu4pfpOLd9Cy7+Ov+Bt9uw/Nv9BWv6/Xe+btu0vsH89/3Za0aoMaLxvLos3IAG7DdyHP+buFQL3EXAMrY/Hah0/955bpIw7zzpllfczyx8OzzYCsyJg4bRpolwuwyiVSgBQkyRMBRKiOLYLDUHqVkybZpvWgRB1sVsz0zQdAcqzZRilYsmzkmmarm8Qogl1Odxp77Qg/vP46bokdISoTy3LnZbD1VmqtSCuUyx7dQuN8zBaQtSlluD+lsNe1NQHcX8NsOpXtwhRF3efw0+5XK5d5g3C6bRMB9hFiNRYnv52q/yeLdc76S0FsNhxJ4rhz+k2lG1B2ia+xT4JUQPPpdwQK7c9xQrC5DgJkZV64oaSo45nJD0sUXZAiEi065A30biKVYzUIlhojJOwLSGy0KlD3oQFlMuzdgsSIdEt7w7pCBEZ5wc9ap66W5CoX7ZXpyREdLoey7NbkGLAQGHYDQDskxAB8XXIu/39bkw16RGTfRIiFBZMc7rHYQmrPlAYgyCNgRfeUEKyw3Pq3+t4hLeT3js1SaZj2RYh0bEij3N0ouVkxa6xeugUEdIlzuTank+rvNuMPJIeFvt0i2dbJC2SuFjU3ThICMJOBiOkV5xci7n7awGNTnrcv/T+cRK2JCRumsbiEthD/H0Qz+ZrTNtXtwiJkxjGOToR22Xelnjm3nMeMIkHz/SRpFLK6nI2bzc7AiLOpCQkAO9ZSfLpVO54R2GcxHyNmuiJcwt4Cklbni33MBcrIk13c7E1IREJfPpIgiTaSQ/C/SAIdklIWOx+bJopYyHgyYqpwdMtEoa6DdMZnXXM2iPpaf+QN1/DZlNCmnEeFpIRzmN/ssFyAkA9iIcuHrCQBBkLAl8TyrlbxD3xMNthAWeyYqaC2CUBp8oTeMbMRPixbFzmzRj76gSflqI72bccbtIZSY8IH06nL6Y5ndogYBiSn4vVFRb/pSsNabQcotS6Fd9DG2LFPcGRlihOrXKzGufohOuOQsFKVifry3wkeYS9Z8hK8JbbOGiau0WUwx4EFE4OuC/zRnw2bxZQEoXIePpIWLxzsQQtpA2fu6UG7ilGMnQv6530YtblCEEtlLUmWfSwkkAs71iXDLUY64Pj0oL3k8iH03JMy3UWkO4dhbFg8XRLSiz5ftgs9z9/IBmNplqWaOuNlDfIWZKeYrnhY07FxfZBlg65H8+D42RmWpCZn8RNTQlRZuV2i3NHoaxHkfZjYEh4TMlPgV0DhXK3IDYcTBQHVepCKUEAdSpGZlSqA+UEAdSqINlQLfZKCgKoV1EyoGLMlRUEULPCREXVWCstCKBuxYmEyjFWXhBA7QrMGtVjq4UggPoVmQU6xFQbQQA9KjQtdImlVoIA+lRskugUQ+0EAfSq4LjRLXZaCgLoV9FxoGPMtBUE0LPCu0XXWGktCKBvxUdB5xhpLwigdwJ0QvfYUJA6uidCEIwJBfHAhGjAWNSgID6YGIyBGwoSgM4JovOxB0FBWqBjouh4zJ2gIG3QKWF0OtYoUJAO6JA4Ohxjt1CQEKicQCofWxxQkJComEgqHlPcUJAIqJRQKh1LklCQiKiQWCocQ1pQkC6QOcFkLnsWUJAukTHRZCxz1lCQHpAp4WQqq0hQkB6RIfFkKKOoUJAYEDkBRS6bDFCQmBAxEUUsk2xQkBgRKSFFKovMUJCYESExRSiDKlCQBMgyQSlHvFCQhMgiUSlH/FCQBEkzYSlHMlCQhEkjcSlHclCQFEgygSlHslCQlEgikSlH8lCQFIkzoSlHOlCQlIkjsSlHelCQDOglwSlHulCQjOgm0SlH+lCQDImS8JQjGyhIxoRJfMqRHRREANoJQDmyhYIIQpAIlCN7KIhAuIWgHGJAQQTDNE3KIRAURDAoiFhQEIHgKZZ4UBBBYCddTCiIAPAyr7hQkIzhQKHYUJAM4VQT8aEgGcHJinJAQTKA093lgYKkDG+YkgsKkiK85VY+KEhK8KENckJBUoCP/ZEXCpIwfHCc3FCQBOGjR+WHgiQEH16tBhQkAfjPH6gDBYkZERJUhDKoAgWJEZESU6SyyAwFiQkRE1LEMskGBYkBkRNR5LLJAAXpERkSUIYyigoF6QGZEk+msooEBekSGRNOxjJnDQXpApkTTeayZwEFiYgKCabCMaQFBYmASoml0rEkCQUJiYoJpeIxxQ0FCYHKiaTyscUBBemADgmkwzF2CwVpg06Jo9OxRoGCtEDHhNHxmDtBQQLQOVF0PvYgKIgPJghj4IaCuGBiNGAsalCQOkyIZhgTCgKAidAO3WOjvSC6J0AYdI6R1oLoXPFR0TVW2gqia4X3go4x01IQHSs6LnSLnXaC6FbBSaBTDLUSRKeKTRpdYqmNILpUaJroEFMtBNGhIrNC9dgqL4jqFSgCKsdYaUFUrjjRUDXWygqiaoWJjIoxV1IQFStKFlSLvXKCqFZBMqJSHSgliEoVIzuq1IUygqhSISqhQp0oIYgKFaEqsteN9ILIXgE6IHMdSS2IzIHXDVnrSlpBZA24zshYZ1IKImOgSQ3Z6k46QWQLMGlGpjqUShCZAkvaI0tdSiOILAEl4ZGhTqUQRIZAku4QvW6FF0T0AJLeEbmOhRZE5MCReBG1roUVRNSAkeQQsc6FFETEQJF0EK3uhRNEtACR9BEpB4QSRKTAkGwRJReEEUSUgBBxECEnhBBEhEAQMck6NzIXJOsAEPHJMkcyFYRykLBklSuZCUI5SFSyyJlMBKEcpFvSzp3UBaEcpFfSzKFUBaEcJC7SyqXUBKEcJG7SyKlUBKEcJCmSzq3EBaEcJGmSzLFEBaEcJC2SyrXEBKEcJG2SyLlEBKEcJCvizr3YBaEcJGvizMFYBaEcRBTiysXYBKEcRDTiyMlYBKEcRFR6zc2eBaEcRHR6ydGeBKEcRBa6zdWuBaEcRDa6ydmuBKEcRFai5m5kQSgHkZ0oORxJEMpBbMrlMvbv34/h4WEsW7YMmzZtwqlTpzzrLC0t4ciRI+jv70c+n8fY2Bju3LnjWefs2bPYuHEjcrkctmzZgqtXr4Yuw9mzZ7F161asWrUKfX192LVrF2ZmZjzrXL9+Hc899xxyuRxGRkbw2WefAWjkcqVSwauvvop8Po/+/n688847WFpa8hxnKEEoB3Hz888/491338X169dRqVRw4cIF5PN5TE1NOescP34c69evx6+//opKpYLR0VG88MILzvIffvgBuVwOFy5cwPz8PI4ePYo1a9bg3r17ocpw7NgxnDt3Dn///Tf+/PNPjI2NYXh4GNVqFQBw//599Pf3Y2JiAnNzc/jiiy+Qy+Xw7bffAqjldKFQwM6dO1GpVHDz5k1s2LABx44dc/YRShDKQcIwNjaGAwcOOO+Hhobw4YcfOu9v3boFwzCcX/m9e/fitddec5ZXq1UMDg7i448/BgBMTEzg6aefxsLCAgDgt99+w4oVK/D1118H7v/GjRswDAP//PMPAGBychIDAwOeFmH37t0YHx8HANy+fRuGYeCXX35xlp85cwZr16513ncUhHKQMCwuLmJoaAinT58GANy9exeGYeDHH3/0rJfP53Hu3DkAwFNPPYUTJ054lo+OjuLtt98GUDtF2759O/bv34+HDx/iySefxNGjR1uW4fTp0xgYGHBakIMHD2Lnzp2edU6ePInNmzcDAM6fP49cLufJ8WvXrsEwDFQqFQAdBKEcJAzVahXj4+PYunUr/vvvPwDAX3/9BcMwcOvWLc+669atw+TkJADgiSeewJkzZzzL9+zZg7179zrvZ2dnsXbtWjzzzDMoFApO8vu5evUqVq9ejYsXLzqfvfHGG9i9e7dnvU8++QRDQ0MAgKmpKQwMDABo5Poff/wBwzBw+/ZtAG0EoRwkDI8ePcL4+Dief/55zM3NOZ/H0YLYHDp0CIZh4Jtvvgksw5UrV9Df34/PP//c83nYFsTGNM1wLQjlIGFYWFjA6OgoCoUCHj582LR8aGgIH330kfN+ZmamqQ/y+uuvO8ur1SrWrVvn9EEA4LvvvsPKlStx4MABbN68GQ8ePPDs46uvvsJjjz3maTlsJicn8fjjj3tanfHx8aY+yM2bN53l7733Xvs+COUgYZifn8e2bduwY8cO3L9/H4uLi1hcXMSjR4+cdY4fP46RkRHMzMzg33//xcsvv4xt27Y5y7///nssW7YMly5dwsLCAj744APPVaw7d+5gcHAQU1NTqFarePHFF7Fv3z7n++fPn8fKlStx8eJFZ/+Li4uwLAtA7SpWX18f3n//fSwsLODy5ctYvny5cxULAAqFAl566SXcu3cPv//+OzZu3Ii33nrLWe4RhHKQsHz55ZcwDKPp5T6lWVpawuHDh9HX14d8Po9XXnklcBxkZGTEGQf56aefANRak0KhgDfffNNZt1KpYHBwEJ9++ikA4Nlnnw0sg/u07tq1a844yPDwsDMO4t6mPQ6yZs0aZxzEdsERhHIQ4sU0zZog9h988cWX92WaJv4Halvvq1Pv7dUAAAAASUVORK5CYII=';
const products = [new Product('1', 'apple', 'a very cool apple', 5.0, 6.9, img),
    new Product('2', 'orange', 'a very cool orange', 4.0, 3.80, img)];
const shoppingCart = new ShoppingCart(products);

const getProducts = async () => {
    return products;
};

const getProduct = async id => {
    return products.find(p => p.id === id);
};

const getShoppingCart = () => {
    return shoppingCart;
};
const calculateTotal = products => {
    return 9.0;
}

(async () => {
    const productsDiv = document.querySelector('#products');
    console.log(productsDiv);
    if (productsDiv) {
        const products = await getProducts();
        products.forEach(p => {
            productsDiv.appendChild(Object.assign(
                document.createElement('div'),
                {innerText: p.name})
            );
        });
    }
})();
