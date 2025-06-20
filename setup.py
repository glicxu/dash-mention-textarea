from setuptools import setup

setup(
    name='dash-mention-textarea',
    version='0.0.1',
    description='Dash component: textarea with @mention autocomplete',
    author='Gang Li',
    packages=['dash_mention_textarea'],
    include_package_data=True,
    install_requires=['dash>=2.0.0'],
    license='MIT',
    zip_safe=False,
)
