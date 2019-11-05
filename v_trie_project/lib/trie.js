class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insertRecur(word, root = this.root) {
        let letter = word[0];
        if (!(letter in root.children)) {
            root.children[letter] = new Node();
        }

        if (word.length === 1) {
            root.children[letter].isTerminal = true;
        } else {
            this.insertRecur(word.slice(1), root.children[letter]);
        }
    }

    insertIter(word) {
        let pointer = this.root;
        let letter = word[0];
        while (word.length >= 1) { //n
            letter = word[0];
            if (!(letter in pointer.children))
                pointer.children[letter] = new Node();

            pointer = pointer.children[letter];
            word = word.slice(1);
        }
        pointer.isTerminal = true;
    }

    searchRecur(word, root = this.root) {
        let letter = word[0];
        if (!(letter in root.children)) {
            return false;
        }

        if (word.length === 1 && root.children[letter] && root.children[letter].isTerminal){
            return true;
        } else {
            return this.searchRecur(word.slice(1), root.children[letter]);
        }
    }
   
    searchIter(word){
        let pointer = this.root;
        let letter = word[0];
        // for(letter = word[0]; word.length >= 1; pointer = pointer.children[letter]){
        while (word.length > 0) {
            if (letter in pointer.children) {
                word = word.slice(1);
                pointer = pointer.children[letter];
                letter = word[0];
            } else 
                return false;
        }
        return pointer.isTerminal;
    }

    wordsWithPrefix(prefix, root = this.root) {
        if (prefix.length === 0) {
            let allWords = [];

            if (root.isTerminal) allWords.push('');

            for (let letter in root.children) {
                let child = root.children[letter];

                let suffixes = this.wordsWithPrefix('', child);
                let words = suffixes.map(word => letter + word);
                allWords.push(...words);
            }
            return allWords;
        } else {
            let firstLetter = prefix[0];
            let child = root.children[firstLetter];

            if (child === undefined) {
                return [];
            } else {
                let suffixes = this.wordsWithPrefix(prefix.slice(1), root.children[firstLetter]);
                return suffixes.map(suffix => firstLetter + suffix);
            }
        }
    }
}

module.exports = {
    Node,
    Trie
};