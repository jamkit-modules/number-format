const module = (function() {
    return {
        format: function(value) {
            if (value >= 1000000) {
                return (value / 1000000).toFixed(1).replace(".0", "") + "M";
            }

            if (value >= 1000) {
                return (value / 1000).toFixed(1).replace(".0", "") + "K";
            }

            return value.toFixed(0);
        }
    }
})();

__MODULE__ = module;
