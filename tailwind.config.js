module.exports = {
    variants: {
        animation: ['group-hover']
    },
    theme: {
        extend: {
            backgroundImage: theme => ({
                'body-pattern': "url('../img/pattern.png')"
            }),
            colors: {
                "azul-claro": "#37bcf9",
                "azul-oscuro": "#0370b9"
            },
            animation: {
                'spin-low': 'spin 2s linear infinite'
            }
        }
    },
}