export function closeSearch(searchListContainer, searchBar) {

    window.addEventListener('mouseup', function(event) { 
        
        if(event.target != searchBar && event.target.parentNode != searchBar){
            
            searchListContainer.style.display = 'none';
        };
    });
};