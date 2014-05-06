Position = function(dataOrUrl, company, role, date) {
    this.id = new Date().getTime();
    if (typeof dataOrUrl == 'object') {
        this.id = dataOrUrl.id;
        this.url = dataOrUrl.url;
        this.company = dataOrUrl.company;
        this.role = dataOrUrl.role;
        this.date = new Date(dataOrUrl.date);
    } else {
        this.url = dataOrUrl;
        this.company = company;
        this.role = role;
        this.date = date;
    }

    this.name = function() {
        return [this.company, this.role].filter(function(x) { return x }).join(' - ');
    };
};