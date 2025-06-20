import dash
from dash.development.base_component import Component

class MentionTextarea(Component):
    _prop_names = ["id", "value", "mentions", "placeholder", "style"]
    _type = "MentionTextarea"
    _namespace = "dash_mention_textarea"
