lm.controls.Splitter = function( isVertical, size ) {
	this._isVertical = isVertical;
	this._size = size;

	this.element = this._createElement();
        this._dragListener = new lm.utils.DragListener( this.element );
};

lm.utils.copy( lm.controls.Splitter.prototype, {
	on: function( event, callback, context ) {
		this._dragListener.on( event, callback, context );
	},

	_$destroy: function() {
		this.element.remove();
	},

	_createElement: function() {
                var element = $( '<div class="lm_splitter lm_splitter_hover"><div class="lm_drag_handle"></div></div>' );
		element.addClass( 'lm_' + ( this._isVertical ? 'vertical' : 'horizontal' ) );
		element[ this._isVertical ? 'height' : 'width' ]( this._size );

		return element;
	},
        
        setEditable: function(editable) {
            if (editable) {
                this.element.addClass("lm_splitter_hover");
                this.element.find("div").addClass("lm_drag_handle");
            } else {
                this.element.removeClass("lm_splitter_hover");
                this.element.find("div").removeClass("lm_drag_handle");
            }
        }
});
